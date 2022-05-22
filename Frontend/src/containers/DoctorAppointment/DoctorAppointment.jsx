// /**
//  *
// * @author Saloni Raythatha (sl768578@dal.ca) (Banner ID - B00883060)  (frontend functionality for Doctor's Appointment)
// *
// */
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@mui/material/Typography";
import * as ReactBootStrap from "react-bootstrap";
import './css/DoctorAppointment.css';
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import ReactRoundedImage from "react-rounded-image";
import PageTitle from '../../components/PageTitle/PageTitle';

const useStyles = makeStyles({
  specialityBtn: {
    background: "#11999E",
    border: 0,
    float: "left",
    borderRadius: "5px",
    color: 'white',
    height: 50,
    padding: '0 20px',
    margin: "6px",
    textTransform: 'none',
    justifyContent: 'left',
    align:"center" ,
    "&:hover": {
      background: "#fff",
      color: "#1A374D"
    }
  },
});
const useStyles2 = makeStyles({
specialityBtn2: {
  background: "#11999E",
  border: 0,
  float: "center",
  borderRadius: "5px",
  color: 'white',
  height: 50,
  padding: '0 10px',
  margin: "6px",
  textTransform: 'none',
  justifyContent: 'left',
  "&:hover": {
    background: "#fff",
    color: "#1A374D"
  }
},
});
 
 //function for displaying all the available doctor's  
const DoctorAppointment = (props) => {
let navigate = useNavigate();
const [doctorSpeciality, setdoctorSpeciality] = useState("AllSpeciality");
const [doctorGender, setdoctorGender] = useState("AllGenders");
const [doctorFetchError, setdoctorFetchError] = useState(""); //state for handling error message coming as response
const [doc, setdoc] = useState([]); //state for handling display of doctors
   
// fetching the details of all the doctor's from the mongo database
useEffect(() => {
     //to fetch all the doctor details
     fetch(`/doctors/`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         'Accept': 'application/json'
       },
     })
       .then((res) => res.json())
       .then((doctors) => {
         if (doctors.success === true) {
          setdoc(doctors.doctorRecord);
         } else {
          setdoctorFetchError(doctors.message);
         }
       });
   }, []);

   // navigating to the booked appointment page when user wants to book specific doctor's appointment
const doctorDetailsDisplay = (id) => {
    navigate(`/BookedAppointment/${id}/`);
};
 
const handleSpecialityChange = (e) => {
  if (e.target.value === "AllSpeciality") {
    setdoctorSpeciality("AllSpeciality")
  } else {
    setdoctorSpeciality(e.target.value)
    }
  }

  const handleGenderChange = (e) => {
    if (e.target.value === "AllGenders") {
      setdoctorGender("AllGenders")
    } else {
      setdoctorGender(e.target.value)
      }
    }

  const classes = useStyles();
  const selectedSpeciality = doctorSpeciality
  const selectedGender= doctorGender
  const classes2 = useStyles2();


  let filteredResults = doc

  // Filter based on Doctor's Speciality 
  if (selectedSpeciality !== "AllSpeciality") {
    filteredResults = filteredResults.filter( function (item) {
        return item['Speciality'] === selectedSpeciality
    });
  }

    // Filter based on Doctor's Gender 
  if (selectedGender !== "AllGenders") {
    filteredResults = filteredResults.filter( function (item) {
        return item['Gender'] === selectedGender
    });
  }

   return filteredResults && filteredResults.length > 0 ? (
     <Layout>
       <PageTitle title="Doctor Appointment" />
              <div>
                <PopupState variant="popover" popupId="demo2-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                         <Button variant="contained" {...bindTrigger(popupState)} className={classes.specialityBtn}>
                            Select Doctor Speciality
                         </Button>
                        <Menu {...bindMenu(popupState)}>
                            <div><input type="radio" checked={selectedSpeciality === "Homeopathy"}  onChange={handleSpecialityChange} value="Homeopathy" name="Homeopathy" /> Homeopathy</div>
                            <div><input type="radio" checked={selectedSpeciality === "Surgery"} onChange={handleSpecialityChange} value="Surgery" name="Surgery" /> Surgery</div>
                            <div><input type="radio" checked={selectedSpeciality === "Chiropracter"} onChange={handleSpecialityChange} value="Chiropracter" name="Chiropracter" /> Chiropracter</div>
                            <div><input type="radio" checked={selectedSpeciality === "Physiotherapy"} onChange={handleSpecialityChange} value="Physiotherapy" name="Physiotherapy" /> Physiotherapy</div>
                            <div><input type="radio" checked={selectedSpeciality === "Dentist"} onChange={handleSpecialityChange} value="Dentist" name="Dentist" /> Dentist</div>
                            <div><input type="radio" checked={selectedSpeciality === "Eye Specialist"} onChange={handleSpecialityChange} value="Eye Specialist" name="Eye Specialist" /> Eye Doctor</div>
                            <div><input type="radio" checked={selectedSpeciality === "Corona Specialist"} onChange={handleSpecialityChange} value="Corona Specialist" name="Corona Specialist" /> Corona Specialist</div>
                            <div><input type="radio" checked={selectedSpeciality === "Pediatrician"} onChange={handleSpecialityChange} value="Pediatrician" name="Pediatrician" /> Pediatrician</div>
                            <div><input type="radio" checked={selectedSpeciality === "Physician"} onChange={handleSpecialityChange} value="Physician" name="Physician" /> Physician</div>
                            <div><input type="radio" checked={selectedSpeciality === "Ayurvedic"} onChange={handleSpecialityChange} value="Ayurvedic" name="Ayurvedic" /> Ayurvedic</div>
                            <div><input type="radio" checked={selectedSpeciality === "AllSpeciality"} onChange={handleSpecialityChange} value="AllSpeciality" name="AllSpeciality" /> All Speciality</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
                <PopupState variant="popover" popupId="demo2-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                         <Button variant="contained" {...bindTrigger(popupState)} className={classes.specialityBtn}>
                            Select Doctor Gender
                         </Button>
                        <Menu {...bindMenu(popupState)}>
                            <div><input type="radio" checked={selectedGender === "Male"}  onChange={handleGenderChange} value="Male" name="Male" /> Male</div>
                            <div><input type="radio" checked={selectedGender === "Female"} onChange={handleGenderChange} value="Female" name="Female" /> Female</div>
                            <div><input type="radio" checked={selectedGender === "AllGenders"} onChange={handleGenderChange} value="AllGenders" name="AllGenders" /> All Genders</div>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
                </div>
           
              <Box sx={{ p: 8 }}>
              <Grid container spacing={12} justifyContent="center">
                {filteredResults.map((item) => {
                  return (
                    <Grid
                      item
                      spacing={{ xs: 2, md: 4 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      <Card sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                          <div
                           style={{ display: "flex" }}>
                            <ReactRoundedImage image={item.ImageURL}  
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
                            <p style={{textAlign:"center", fontWeight:"bold", fontSize:"20px"}}>Name: {item.Name}</p>&nbsp;
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              align="left"
                              fontSize="15px"
                            >
                             Speciality: {item.Speciality}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              align="left"
                              fontSize="15px"
                            >
                             Background: {item.Background}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              align="left"
                              fontSize="15px"
                            >
                             Gender: {item.Gender}
                            </Typography>
                            <Typography>
                            <div >
                              <Button className={classes2.specialityBtn2}  onClick={() => { doctorDetailsDisplay(item._id);}}>View Details & Availability</Button>
                            </div>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
              
             );
     </Layout>
   ) : (
     <Layout>
       <Typography>{doctorFetchError}</Typography>
     </Layout>
   );
 };
 
 export default DoctorAppointment;