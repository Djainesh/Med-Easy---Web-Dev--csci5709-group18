/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout/Layout';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import dateFormat, { masks } from "dateformat";
import Error from "../Error/Error";
import './CSS/OrderDetails.css';
import PageTitle from '../../components/PageTitle/PageTitle';

let authToken = "";
let customerEmail = "null";
let ordersData = [];

if(localStorage.getItem("token")!=='undefined'){
    authToken = localStorage.getItem("token");
}
if("Email" in localStorage){
    customerEmail = localStorage.getItem("Email");
}




const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
color: theme.palette.text.secondary,
}));
//   async function userOrderFetch(){
//     await axios.get(`/api/v1/orders/${customerEmail}`).then((res) => {
//         ordersData = res.data.orderDetails;
//     });

// }


function OrderDetails(){
    const [orderData,setOrderData] = useState([]);
    

    useEffect(() => {
       
        axios.get(`/api/v1/orders/${customerEmail}`).then((res) => {
            setOrderData(res.data.orderDetails);
        });

    },[]);


    return (
        
        <Layout>
            <PageTitle title="Order Details" />
            {"token" in localStorage?
            <Box sx={{ width: '100%' , mt: 5}} >
                <h1>Order Details</h1>
            <Stack spacing={2} alignItems="center">
                {orderData.map((orderItem) => (
                    <Item sx={{ width: '60%' }} >
                        <Accordion>
                            <AccordionSummary  expandIcon={<ExpandCircleDownTwoToneIcon />}>
                                <Grid  container direction="row">
                                        <Grid container item  xs={12} md={6}  lg={3}
                                        style={{
                                            display: "flex",    
                                            justifyContent: "flex-end",
                                            alignItems: "flex-end"
                                        }}>
                                            <img className="imageOrder" src={orderItem.orderItems[0].price_data.product_data.images} />
                                        </Grid>
                                        <Grid item rowSpacing={0} xs={12} md={6} lg={3} direction="column"
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-end"
                                        }}
                                        >
                                            <p>Items Cost: ${orderItem.itemsAmount}</p>
                                            <p>Tax Amount: ${orderItem.taxAmount}</p>
                                            <p>Shipping Charges: ${orderItem.shippingAmount}</p>
                                            <p>Total Amount: ${orderItem.paymentAmount}</p>

                                        </Grid>
                                        <Grid item  xs={12} md={6} lg={3} pl={4} direction="column"
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-end",
                                            margin: "0rem"
                                        }}  
                                            
                                        
                                        >   
                                            <p>Order Status: {(orderItem.orderStatus)}</p>
                                            <p>Paid at: {dateFormat(orderItem.paidAt)}</p>

                                        </Grid>
                                        <Grid item  xs={12} md={6} lg={3} pr={4} direction="column"
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-end"
                                        }}
                                        
                                        >
                                            <p>Street Address: {orderItem.shippingInfo.streetAddress} - {orderItem.shippingInfo.zipCode}</p>
                                            <p>City: {orderItem.shippingInfo.city}</p>
                                            <p>State: {orderItem.shippingInfo.state}</p>
                                            <p>Country: {orderItem.shippingInfo.country}</p>

                                        </Grid>
                                    
                                </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    
                                    
                                        <TableContainer component={Paper} sx={{ maxHeight: 150  }} >
                                            <Table stickyHeader size="small">
                                                <TableHead>
                                                    <TableRow>

                                                        <TableCell>Item Name</TableCell>
                                                        <TableCell align="right">Item Cost</TableCell>
                                                        <TableCell align="right">Quantity</TableCell>
                                                        <TableCell align="right">Item Total</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                
                                                <TableBody>
                                                {orderItem.orderItems.map((items) => (
                                                <TableRow
                                                    key={items.price_data.product_data.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                    <TableCell component="th" scope="row">
                                                        {items.price_data.product_data.name}
                                                    </TableCell>
                                                    <TableCell align="right">{items.price_data.unit_amount}</TableCell>
                                                    <TableCell align="right">{items.quantity}</TableCell>
                                                    <TableCell align="right">{items.price_data.unit_amount*items.quantity}</TableCell>

                                                    </TableRow>
                                                    ))}
                                                </TableBody>
                                                
                                            </Table>
                                        </TableContainer>
                                        
                        
                                    
                                
                                </AccordionDetails>
                            
                        </Accordion>
                    </Item>
                ))}
            </Stack>
            <p></p>
            </Box>:<>
            <Error />
            </>}
            
        </Layout>

    );

}

export default OrderDetails;