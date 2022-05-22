import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {toast} from "react-toastify";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import {toggle} from '../../features/payment/addToCart';
const useStyles = makeStyles({
  root: {
    background: "#13878F",
    border: 0,
    color: 'white',
    height: 40,
    fontSize: 18,
    textTransform: 'none',
    fontWeight: 600,
    "&:hover": {
      background: "#11999E",
      color: "#fff"
    }
  },
});

export default function TestLab({item: {labName,labImage, labCharges, labAddress}}) {

  const addCartToggle = useSelector((state) => state.addToCartToggle.value);
  const dispatch = useDispatch();


    function handleAddToCart(labName,labCharges,labAddress,labImage){
        if("labTest" in localStorage){
          let CartItems = [];
            let data = {
              Name: labName,
              Brand: labAddress,
              Price: labCharges,
              ImageURL: labImage,
              quantity: 1
            };
            CartItems.push(data);
            localStorage.setItem("cartItems",JSON.stringify({CartItems}));
            toast.info(`${labName} selected`);
            
            dispatch(toggle(!addCartToggle))
        }else{
          let CartItems = [];
          let data = {
            Name: labName,
            Brand: labAddress,
            Price: labCharges,
            ImageURL: labImage,
            quantity: 1
          };
          CartItems.push(data);
            localStorage.setItem("cartItems",JSON.stringify({CartItems}));
            toast.success(`${labName} selected`);
            
            dispatch(toggle(!addCartToggle))
        }
    }
  return (
    <Card sx={{ width: 500 }}>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image={labImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {labName}, {labAddress}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                ${labCharges}
              </Typography>
            <CardActions>
              <Button size="small" onClick={() => handleAddToCart(labName,labCharges,labAddress,labImage)}>Add to Cart</Button>
            </CardActions>
            </CardContent>
        </Card>
  )
}
