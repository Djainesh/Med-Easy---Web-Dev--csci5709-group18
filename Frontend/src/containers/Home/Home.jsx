import React, {useEffect, useRef,useState} from 'react';
import Layout from '../../components/Layout/Layout';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel  from 'react-material-ui-carousel'
import { Button } from '@mui/material'
import axios from 'axios';
import MuiImageSlider from 'mui-image-slider';
import { makeStyles } from '@material-ui/core/styles';
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Slider from '../../components/Slider/Slider'
import PageTitle from '../../components/PageTitle/PageTitle';

const useStyles = makeStyles({
    root: {
      background: "#13878F !important",
      border: 0,
      color: 'white !important',
      height: 40,
      fontSize: 18,
      width: "100%",
      textTransform: 'none',
      fontWeight: 600,
      "&:hover": {
        background: "#11999E !important",
        color: "#fff"
      }
    },
  });


export default function Checkout(props) {

    let navigate = useNavigate();
    const classes = useStyles();
    const [items,setItems] = useState([]);
    const [images,setImage] = useState([]);
    let item = [];
    function handleCheckIt(_id){
        console.log("id",_id);
        navigate(`/ProductDisplay/${_id}`);
    }
    useEffect(() => {

        const getProduct = async (req,res) => {
            item = await axios.get('/api/v1/Products/number');
            setItems(item.data.medicineRecord);
            let imagesTest = [];
            item.data.medicineRecord.map((item) => imagesTest.push(item.ImageURL));
            setImage(imagesTest);
            if(imagesTest.length > 0) {
                localStorage.setItem("carouselImages",imagesTest);
            }
        }
        getProduct();
    },[])

  
    function CarouselMain(props)
    {


    return (
        <div style={{cursor: "pointer", marginTop: "10px"}}>
                <Carousel
                fullHeightHover={true}
                navButtonsAlwaysVisible={true}
                >
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>

               
        </div>

        
    )


}

function Item(props)
{
    console.log("props.item",props.item);

        return (
            <Paper onClick={() => handleCheckIt(props.item._id)} >
                <Grid container 
                direction="column"
                alignItems="center"
                justifyContent="center" >
                    <Grid item >
                        <img src={props.item.ImageURL} id="siz"></img>
                        <h2 style={{textAlign: 'center'}}>{props.item.Name}</h2>
                        <h3 style={{textAlign: 'center'}}>{props.item.ProductDescription}</h3>

                    </Grid>

                </Grid>

                
            </Paper>
        )
    
  
}



    return (
        <Layout>
            <PageTitle title="Home Page" />
            <Box container sx={{mt: 8}}>
                <Slider />
                <Grid container alignItems="center" justifyContent="center" sx={{mb: 8}}>
                    <Grid item xs={12} md={8} lg={8}>
                        <CarouselMain></CarouselMain>

                    </Grid>

                    
                </Grid>
            </Box>
        </Layout>
    );
}
