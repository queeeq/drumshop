import {useEffect, useState} from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, Button} from '@mui/material';
import supabase from "../../supabase.js";
import AddProductForm from "./AddProductForm.jsx";

function ProductGrid() {
    const [products, setProducts] = useState([]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const fetchProducts = async () => {
        try {
            const {data, error} = await supabase.from('products').select('*');

            if (error) {
                console.error('Error fetching products:', error.message);
            } else {
                setProducts(data);
            }
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AddProductForm onAddProduct={addProduct}/>
            </Grid>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia component="img" height="500" image={product.imageUrl} alt={product.name}
                                   styles={{margin: 'auto'}}/>
                        <CardContent>
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
                            <Button variant="contained" color="primary">
                                Delete
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}


export default ProductGrid;
