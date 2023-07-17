import {useEffect, useState} from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, Button} from '@mui/material';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://tfrtnrdhfaseykpxujlx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcnRucmRoZmFzZXlrcHh1amx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMzk1NjUsImV4cCI6MjAwNDkxNTU2NX0.PUkSp9-m15JcLR2DvtA0e11k74KzzYY0ytV8ZoEhlLM';
const supabase = createClient(supabaseUrl, supabaseKey);

function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const {data: products, error} = await supabase.from('products').select();
        if (error) {
            console.error('Error fetching products:', error);
        } else {
            setProducts(products);
        }
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2" color="white">
                    Products
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2" color="white">
                    Add Product
                </Typography>
            </Grid>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={product.image}
                            alt={product.name}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.material}
                            </Typography>
                            <Typography variant="h6" component="div">
                                ${product.price}
                            </Typography>
                            <Button variant="contained" color="primary">
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductGrid;
