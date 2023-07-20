import {useEffect, useState} from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, IconButton} from '@mui/material';
import supabase from "../../supabase.js";
import AddProductForm from "./AddProductForm.jsx";
import DeleteIcon from '@mui/icons-material/Delete';

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
            const {data, error} = await supabase.from('products').insert([newProduct]);

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

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AddProductForm onAddProduct={addProduct}/>
            </Grid>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia component="img"
                                   height="500"
                                   image={product.imageUrl}
                                   alt={product.name}/>
                        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <Typography variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.material}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                length: {product.length}
                            </Typography>
                            <Typography variant="h6" component="div">
                                ${product.price}
                            </Typography>
                            <div style={{flex: 1}}/>
                            <IconButton
                                onClick={() => handleDeleteProduct(product.id)}
                                aria-label="delete"
                                style={{alignSelf: 'flex-end'}}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}


export default ProductGrid;
