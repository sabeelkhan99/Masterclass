import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';


const ProductsDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProductById() {
            const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(() => res.data);
        }
        fetchProductById()
    }, []);

    return (
        <Fragment>
            {product && <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={product.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.description}
                    </Typography>
                    <Rating name="read-only" value={product.rating.rate} readOnly />
                </CardContent>
                <CardActions>
                    <Button size="small">Add To Cart</Button>
                </CardActions>
            </Card >}
        </Fragment>
    )
}

export default ProductsDetails;
