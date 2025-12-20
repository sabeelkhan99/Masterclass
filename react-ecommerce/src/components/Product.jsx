import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

function Product(props) {
    return (
        <Card sx={{ maxWidth: 345, m:5 }}>
            <CardMedia
                sx={{ height: 180 }}
                image={props.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title.substring(0,20)}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {props.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.description.substring(0,150)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/products/${props.id}`} variant='contained' size="small">Show</Button>
            </CardActions>
        </Card>
    );
}


export default Product;