import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "../components/Product";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const HomePage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(() => res.data);
        }

        // function call to fetch a products list
        fetchProducts();

        //To make this better we can ideally create a custom httpHook for e.g - useHttp()
    }, []);

    return <Box sx={{ width: '80vw', margin: '10px auto' }}>
        {products.length === 0 && <p>Loading Products....</p>}
        {products.length &&
            <Box>
                <h1>All Products</h1>
                <Grid container>
                    {products.map((product) => {
                        return <Grid key={product.id} spacing={2} size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                        </Grid>
                    })}
                </Grid>
            </Box>
        }
    </Box>
}

export default HomePage;

