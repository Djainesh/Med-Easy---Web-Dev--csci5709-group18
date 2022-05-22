/***
 * Author: Jainesh Ketan Desai
 * Mail: Jainesh@dal.ca
 * The below code is responsible for showing the blog that are posted by the other user and approved by  admin for the reading to the end user(customer)
 */
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import PageTitle from '../../components/PageTitle/PageTitle';
function Newblog() {
  const [Data, setData] = useState([]);

  /**
   * the below useEffect is used to retriving data from MonogDb where the status of the blog is 1
   */

  useEffect(() => {
    axios
      .get("/formstatus")
      .then((response) => {
        setData(response.data.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(Data);
  return (
    <>
      <Layout>
        <PageTitle title="View Blogs" />
        <br></br>
        <Box sx={{ p: 6 }}>
          <Grid container spacing={6} justifyContent="center">
            {Data.map((item, index) => {
              return (
                <Grid
                  item
                  spacing={{ xs: 2, md: 4 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Card sx={{ maxWidth: 390 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        src={`https://source.unsplash.com/featured/?Doctor&${index}`}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Topic: {item.Topic}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="left"
                        >
                          {item.Content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Layout>
    </>
  );
}

export default Newblog;
