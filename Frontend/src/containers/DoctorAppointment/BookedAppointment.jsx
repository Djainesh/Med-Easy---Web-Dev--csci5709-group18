// /**
//  *
// * @author Saloni Raythatha (sl768578@dal.ca) (Banner ID - B00883060)  (frontend functionality for Booking Appointment)
// *
// */

import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as ReactBootStrap from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2'
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import ReactRoundedImage from "react-rounded-image";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import { NavMenu } from "../../components/NavElements/NavElements";
import PageTitle from '../../components/PageTitle/PageTitle';

const useStyles = makeStyles({
  specialityBtn: {
    background: "#11999E",
    border: 0,
    borderRadius: "10px",
    color: 'white',
    height: 50,
    padding: '0 100px',
    margin: "6px",
    textTransform: 'none',
    justifyContent: 'center',
    "&:hover": {
      background: "#fff",
      color: "#1A374D"
    }
  },
});


 //function for displaying doctor 
 const BookedAppointment = (props) => {
    const params = useParams(); //params will be use for getting doctor ID
    const [fetchedDoctor, setFetchedDoctor] = useState(undefined); // state for handling doctor
    const [fetchedDoctorError, setFetchedDoctorError] = useState(undefined); // state for handling doctor error
    const [bookedSlot, setBookedSlot] = useState("NoSlots");
    const [open, setOpen] = React.useState(false);
        const handleClose = () => {
             setOpen(false);
        };
        const handleToggle = () => {
            setOpen(!open);
          };

      // fetching doctor's details based on doctor id
    useEffect(() => {
         //to fetch all the doctor details
         fetch(`/doctors/${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
        })
           .then((res) => res.json())
           .then((jsonValue) => {
             if (jsonValue.success === true) {
              setFetchedDoctor(jsonValue.doctorRecord);
             } else {
              setFetchedDoctorError(jsonValue.message);
             }
           });
       }, []);
  
       const classes = useStyles();
  
     // handling the appointment confirmation button  
    function handleAppointmentConfirmation() {
      alert("Appointment Confirmed For slot" + bookedSlot + fetchedDoctor.Name)  
    }

//sweet aleart  extension used for appointment confirmation message
function opensweetalert ()
{
  Swal.fire({
    title: 'Appointment Confirmed',
    text: "For Date & Time: " + bookedSlot  + " with " + fetchedDoctor.Name,
    type: 'success',
  })
}

const handleTimeStateChange = (e) => {
  if (e.target.value === "NoSlots") {
    setBookedSlot("NoSlots")
  } else {
    setBookedSlot(e.target.value)
  }
}

  

  const currentBookedSlot = bookedSlot

  return fetchedDoctor !== undefined ? (     
  <Layout>
    <PageTitle title="Book Appointment" />
    <div style={{ marginLeft: '40%', marginTop: '30px', width: '30%' }}>
        <Box sx={{ p: 8 }}>
              <Grid container spacing={12} justifyContent="left">
                    <Grid item spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Card sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                          <div
                           style={{ display: "flex" }}>
                            <ReactRoundedImage image={fetchedDoctor.ImageURL}  
                            roundedColor="#FFFFFF"
                            imageWidth="300"
                            imageHeight="300"
                            roundedSize="13"
                            borderRadius="15"
                            hoverColor="#66A5CC"
                            float="left"
                            />
                          </div>                         
                          <CardContent>
                            <Typography gutterBottom  component="div">
                            <p style={{textAlign:"center", fontWeight:"bold", fontSize:"20px"}}>Name: {fetchedDoctor.Name}</p>&nbsp;
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              align="left"
                              fontSize="15px"
                            >
                             Speciality: {fetchedDoctor.Speciality}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              align="left"
                              fontSize="15px"
                            >
                             Background: {fetchedDoctor.Background}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              align="left"
                              fontSize="15px"
                            >
                             Gender: {fetchedDoctor.Gender}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>&nbsp;&nbsp;&nbsp;&nbsp;
                          <ReactBootStrap.Card.Title>
                          <h5> Appointment Selected: {currentBookedSlot} </h5>
                          </ReactBootStrap.Card.Title>
                    </Grid>
              </Grid>
            </Box>
          </div>  
         
          <div style={{ marginLeft: '22%', marginTop: '-100px', width: '100%'}}>
            <NavMenu>
            <Box sx={{ p: 12 , justifyContent: "center"}}>
              <Grid container spacing={12} justifyContent="center">
              <Grid item spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <ReactBootStrap.Card style={{ width: "25rem",fill:"Highlight", float: "left" }} >
                  <PopupState variant="popover" popupId="demo2-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                            <Button {...bindTrigger(popupState)} className={classes.specialityBtn}>
                                Current Availability
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                              <div> <h5><input type="radio"  checked={currentBookedSlot === fetchedDoctor.TimeDate1}  onChange={handleTimeStateChange} value={fetchedDoctor.TimeDate1} name="TimeDate1" />&nbsp;&nbsp;Slot 1 : {fetchedDoctor.TimeDate1} </h5></div>
                              <div> <h5> <input type="radio"  checked={currentBookedSlot === fetchedDoctor.TimeDate2}  onChange={handleTimeStateChange} value={fetchedDoctor.TimeDate2} name="TimeDate2" />&nbsp;&nbsp;Slot 2 : {fetchedDoctor.TimeDate2} </h5></div>
                              <div> <h5> <input type="radio"  checked={currentBookedSlot === fetchedDoctor.TimeDate3}  onChange={handleTimeStateChange} value={fetchedDoctor.TimeDate3} name="TimeDate3" />&nbsp;&nbsp;Slot 3 : {fetchedDoctor.TimeDate3} </h5></div>
                              <div> <h5> <input type="radio"  checked={currentBookedSlot === fetchedDoctor.TimeDate4}  onChange={handleTimeStateChange} value={fetchedDoctor.TimeDate4} name="TimeDate4" />&nbsp;&nbsp;Slot 4 : {fetchedDoctor.TimeDate4} </h5></div>
                              <div> <h5> <input type="radio"  checked={currentBookedSlot === fetchedDoctor.TimeDate5}  onChange={handleTimeStateChange} value={fetchedDoctor.TimeDate5} name="TimeDate5" />&nbsp;&nbsp;Slot 5 : {fetchedDoctor.TimeDate5} </h5></div>  
                              <div> <h5> <input type="radio" checked={currentBookedSlot === "NoSlots"}  onChange={handleTimeStateChange} value="NoSlots" name="NoSlots"/>&nbsp;&nbsp; No Slots Selected </h5></div>
                        </Menu>
                        </React.Fragment>
                    )}
                      </PopupState> 
                  </ReactBootStrap.Card>   
                </Grid> 
              </Grid>
            </Box>         

            <Box sx={{ p: 12, justifyContent: "center"}}>
              <Grid container spacing={12} justifyContent="center">
              <Grid item spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                 <ReactBootStrap.Card style={{ width: "25rem",fill:"Highlight", float: "right" }} >
                 <Button type="submit" variant="contained"  onClick={opensweetalert} id="confirmAppoinment" className={classes.specialityBtn}>
                        Confirm Appointment
                      </Button>
                  </ReactBootStrap.Card>   
                </Grid> 
              </Grid>
              </Box>
          </NavMenu>
          </div>

     </Layout>   
   ) : (
    fetchedDoctorError !== undefined ? <Layout>
       <Typography>{fetchedDoctorError}</Typography>
     </Layout> : null
   );
 };
 
 export default BookedAppointment;