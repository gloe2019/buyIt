import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton'
import Link from "@mui/material/Link"

interface product {
  _id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  quantity: number
}



const Product = (props: product) => {

  const handleClick = (event: React.MouseEvent) => {
    console.log(event.target)
    let product_id = event.currentTarget.id
  }
  console.log(">>>product props", props)
  return (
    <Grid item>

      <Card sx={{ maxHeight: 400, maxWidth: 350 }}>
        <CardMedia
          component="img"
          alt={props.name}
          height="150"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            ${props.price}
          </Typography>
          <Typography
            variant="body1" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" id={props._id} onClick={handleClick} endIcon={<AddShoppingCart />} >
            Add to Cart
          </Button>

        </CardActions>
      </Card>
    </Grid >
  )
}





export default Product