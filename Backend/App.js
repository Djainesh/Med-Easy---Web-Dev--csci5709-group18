/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

const express = require('express');
const app = express();

const cors = require('cors');


// app.use(express.static(path.join(__dirname, '../Frontend/build')));

// app.get('*',function(req, res){
//   res.sendFile(path.join(__dirname, '../Frontend/build','index.html'));
// })

app.use(
  cors({
    origin: ["http://localhost:3000", "https://checkout.stripe.com","https://medeasy-group18.herokuapp.com"],
  })
);

app.use(express.json());



module.exports = app;
