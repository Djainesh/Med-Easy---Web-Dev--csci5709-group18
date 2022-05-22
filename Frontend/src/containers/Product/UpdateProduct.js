// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from '../../components/Adminlayout/Layout';
import "./CSS/Product.css";
import {storage} from './firebase';
import Error from '../Error/Error';
import PageTitle from '../../components/PageTitle/PageTitle';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

// function to update product details that are already added 
// here admin on clicking update button in item.js page will be redirected to this
// page and then form will be prefilled with the product details and then admin can 
// any field they like to update
function UpdateProduct() {
  let authToken = "";
  if(localStorage.getItem("token")!=='undefined'){
    authToken = localStorage.getItem("token");
}
  const [name,setName] = useState("")
  const [brand,setBrand] = useState("")
  const [dose,setDose] = useState("")
  const [price,setPrice] = useState("")
  const [type,setType] = useState("")
  const [description,setDescription] = useState("")
  const [quantity,setQuantity] = useState("")
  const [image,setImage] = useState(null);
  const [webimage,setWebImage] = useState("");
  const storage = getStorage();
  const [progress,setProgress] = useState();

  const params = useParams();
 
  // console.log("params", params.productid);
  const api_url = '/productlist/'+params.productid;

// function to set all the variables with database values
  useEffect(() => {
    axios.get(api_url).then((res) => {
      // console.table("Result", JSON.stringify(res));
      setName(res.data.Name);
      setBrand(res.data.Brands);
      setDose(res.data.Dose);
      setPrice(res.data.Price);
      setType(res.data.ProductType);
      setDescription(res.data.ProductDescription);
      setQuantity(res.data.ProductQuantity);
      setWebImage(res.data.ImageURL);
    });
  },[]);

// Below are the set function to handle change of all the variables whose value is 
// is updated by admin 
  function handleName(e) {
    // const newdata = { ...product,Name:e.target.value };
    // console.log(newdata);
    // newdata[e.target.id] = e.target.value;
    setName(e.target.value);
  }
  function handleBrand(e)
  {
    setBrand(e.target.value);
  }
  function handleDose(e)
  {
    setDose(e.target.value);
  }
    
  function handlePrice(e)
  {
    setPrice(e.target.value);
  }
    
  function handleType(e)
  {
    setType(e.target.value);
  }
    
  function handleDescription(e)
  {
    setDescription(e.target.value);
  }
  function handleQuantity(e)
  {
    setQuantity(e.target.value);
  }
    

  // function to handle Image file content 
  const handleImage= e =>
    {
      if(e.target.files[0]){
        console.log(e.target.files[0])
        setImage(e.target.files[0]);
      }
    };
    console.log("Imagename",image)

    // function to handle upload if file is changed
    const handleUpload = () =>
    {
      const storageRef = ref(storage, 'images/' + image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      // const uploadTask = ref(storage,'images/${image.name}').put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(prog)
          console.log('Upload is ' + progress + '% done');
        },
        error => {
          console.log(error);
        },
        () =>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            console.log("File available at ",downloadURL);
            setWebImage(downloadURL);
          });
        }
      );
    }
  
  // function to handle the form submit
  function submit(e) {
    e.preventDefault();
    axios
      .patch(api_url, {
        Name: name,
        Brands: brand,
        Dose: dose,
        Price: price,
        ProductType: type,
        ProductDescription: description,
        ProductQuantity: quantity,
        ImageURL: webimage,
      })
      .then((res) => {
       alert("Product Updated");
      //  navigate
      }); 
  }

  return (
    <>
    {
     "token" in localStorage?
    <div>
      <Layout>
      <PageTitle title="Update Product" />
      <br/>
      <a href="/items">
        <ReactBootStrap.Button
          variant="primary"
          id="Buttontwo"> Back to Admin Product Page
        </ReactBootStrap.Button>
        </a>
      <div>
      <Grid>
        <Card
          style={{
            maxWidth: 600,
            padding: "20px 20px",
            margin: "3em auto auto  auto",
          }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Update Product Details Page
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
             <h5> Enter the Details you wish to Update for this Product: </h5>
            </Typography>
            <br/>
            <form onSubmit={(e) => submit(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    onChange={(e) => handleName(e)}
                    id="Name"
                    value={name}
                    placeholder="Enter Product Name"
                    label="Product Name"
                    variant="outlined"
                    inputProps={{maxlength: 22}}
                    fullWidth
                    required
                  />
                </Grid>
                <br/> <br/> <br/>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => handleBrand(e)}
                    id="Brands"
                    value={brand}
                    placeholder="Enter Brand Name"
                    label="Brand"
                    variant="outlined"
                    inputProps={{maxlength: 16}}
                    fullWidth
                    required
                  />
                  <br/> <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleDose(e)}
                      id="Dose"
                      value={dose}
                      type="number"
                      placeholder="Enter Dose"
                      label="Dose"
                      variant="outlined"
                      inputProps={{max: 2000, min: 5}}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handlePrice(e)}
                      id="Price"
                      value={price}
                      type="number"
                      placeholder="Enter Product Price"
                      label="Product Price"
                      variant="outlined"
                      inputProps={{max:1000, min: 5}}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleType(e)}
                      id="ProductType"
                      value={type}
                      placeholder="Enter Product Type"
                      label="Product Type"
                      variant="outlined"
                      inputProps={{maxlength: 20}}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleDescription(e)}
                      id="ProductDescription"
                      value={description}
                      label="Product Description"
                      multiline
                      rows={4}
                      placeholder="Enter Product Description Here"
                      variant="outlined"
                      inputProps={{maxlength: 24}}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleQuantity(e)}
                      id="ProductQuantity"
                      value={quantity}
                      type="number"
                      placeholder="Enter Product Quantity"
                      label="Product Quantity"
                      variant="outlined"
                      inputProps={{max: 500, min: 5 }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleImage(e)}
                      id="ProductImage"
                      type="file"
                      // value={webimage}
                      // placeholder="Select Product Image"
                      // label="Product Image"
                      variant="outlined"
                      fullWidth
                    />
                    <br/>
                    <br/>
                    <ReactBootStrap.Button id="Button" onClick={handleUpload}> Upload</ReactBootStrap.Button>
                    <h4>Uploading Status: {progress}%</h4>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      id="Buttonthree"
                      fullWidth>
                      Update Product
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </div>
      </Layout>
    </div>: <Error />}
    </>
  );
}

export default UpdateProduct;
