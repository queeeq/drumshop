import {useEffect, useState} from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, IconButton} from '@mui/material';
import supabase from "../../supabase.js";
import AddProductForm from "./AddProductForm.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import ProductCard from "./ProductCard.jsx";

function ProductGrid() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const {data, error} = await supabase
                .from('products')
                .select('*');

            if (error) {
                console.error('Error fetching products:', error.message);
            } else {
                const productsWithParsedIds = data.map((product) => ({
                    ...product,
                    id: parseInt(product.id),
                }));
                setProducts(productsWithParsedIds);
            }
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };

    const addProduct = async (newProduct) => {
        try {
            const {data, error} = await supabase
                .from('products')
                .insert([newProduct]);

            if (error) {
                console.error('Error adding product to database:', error.message);
            } else {
                console.log('Product added to database:', data);
                fetchProducts();
            }
        } catch (error) {
            console.error('Error adding product to database:', error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDeleteProduct = async (productId) => {
        try {
            const {data, error} = await supabase.from('products').delete().eq('id', productId);

            if (error) {
                console.error('Error deleting product:', error.message);
            } else {
                console.log('Product deleted from database:', data);
                fetchProducts()
            }
        } catch (error) {
            console.error('Error deleting product:', error.message);
        }
    }

    const handleEditProduct = async (productId, editedProduct) => {
        try {
            const {data, error} = await supabase
                .from('products')
                .update(editedProduct)
                .eq('id', productId);

            if (error) {
                console.error('Error editing product:', error.message);
            } else {
                console.log('Product edited in the database:', data);
                fetchProducts();
            }
        } catch (error) {
            console.error('Error editing product:', error.message);
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AddProductForm onAddProduct={addProduct}/>
            </Grid>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    {/* Wykorzystujemy komponent ProductCard tylko dla wyświetlenia kart z guzikami edycji i usuwania */}
                    <ProductCard
                        product={product}
                        handleDeleteProduct={handleDeleteProduct}
                        handleEditProduct={handleEditProduct}
                    />
                </Grid>
            ))}
        </Grid>
    );
}


export default ProductGrid;
