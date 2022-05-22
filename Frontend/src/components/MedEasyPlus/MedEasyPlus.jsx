import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../../images/MedEasy-logos.jpeg';
import Grid from '@mui/material/Grid';

export default function MedEasyPlus() {
    return (
        <Grid sx={{mt: 4}}>
             <Card sx={{ width: 1 }}>
            <CardMedia
                component="img"
                height="200px"
                image={logo}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="inherit" component="div" align="center">
                    Now with MedEasyPlus earn 2X more MedEasy points with the spend of 100$
                </Typography>

            </CardContent>
            </Card>
        </Grid>
       
      );
}
