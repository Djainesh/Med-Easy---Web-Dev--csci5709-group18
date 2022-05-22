const app = require("./App");
const { MongoClient } = require("mongodb");
const userRouter = require("./routes/userRoute");
const userprofileRouter = require("./routes/userprofileRoute");
const productRouter = require("./routes/productdisplay");
const orderRouter = require("./routes/orderRoute");

const updateCart = require("./routes/updateCart");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const ratingRouter = require("./controllers/ReviewandRatingController");
const blog = require("./controllers/BlogsController");
const express = require("express");
const stripePaymentRouter = require("./routes/stripePaymentRoute");
const testBookingRouter = require("./routes/testBookingRoute");
const searchRouter = require("./routes/searchRoute");

const adminproductRouter = require("./routes/productRoute");
const admincareerRouter = require("./routes/careerRoute");
const usercareerRouter = require("./routes/jobapplyRoute");
const doctorAppointmentRouter = require("./routes/doctorAppointmentRoute")



dotenv.config({ path: __dirname + "/./configs/setup.env" });
require("./models/userModel");
// require("./models/user");
require("./models/product");

// dotenv.config({path:__dirname + '/./configs/setup.env'});
dotenv.config();

app.use(userRouter);
app.use(userprofileRouter);
app.use(productRouter);
app.use(admincareerRouter);
app.use(usercareerRouter);

app.use(orderRouter);
app.use(adminproductRouter);
app.use(ratingRouter);
app.use(blog);
app.use(stripePaymentRouter);

app.use(searchRouter);
app.use(doctorAppointmentRouter);


app.use(testBookingRouter);
app.use(updateCart);
app.use(express.static(path.join(__dirname, "../Frontend/build")));

app.get("/sitemap.xml", (req, res) => res.sendFile(path.join(__dirname, "../Frontend/build", "sitemap.xml")));
app.get("/robots.txt", (req, res) => res.sendFile(path.join(__dirname, "../Frontend/build", "robots.txt")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../Frontend/build", "index.html"));
});

async function main() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log("listening on port " + process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
}

main().catch(console.error);
