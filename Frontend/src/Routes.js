import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default (
    <Router>
    <Routes>
      <Route exact path="/"  />
      <Route exact path="/AdminHome"  />
      <Route exact path="/Register" />
      <Route exact path="/Login"  />
      <Route exact path="/Profile"  />
      <Route exact path="/ForgotPassword" />
      {<Route exact path="/Cart" />}
      <Route exact path="/Products"  />
      <Route
        exact
        path="/ProductDisplay/:id"
      />
      <Route exact path="/Checkout"  />
      <Route exact path="/Checkout/OrderPlaced" />
      <Route exact path="/Checkout/Payment" />
      <Route exact path="/OrderDetails"  />
      <Route exact path="/SearchResults"  />
      <Route exact path="/DoctorAppointment"  />
      <Route
        exact
        path="/BookedAppointment/:id"
        
      />
      <Route path="/items">
        <Route path=":productid" ></Route>
        <Route index ></Route>
      </Route>
      <Route path="/addproduct" />
      <Route path="/postblog"  />
      <Route path="/viewBlog"  />
      <Route path="/validateBlog" />
      <Route path="/validatingBlog"  />
      <Route path="/BookTest"  />
      <Route path="/career">
        <Route path=":jobid" ></Route>
        <Route index ></Route>
      </Route>
      <Route path="/addcareer"  />
      <Route path="/viewcareer">
        <Route path=":jobid" ></Route>
        <Route index>
         
        </Route>
      </Route>
      <Route path="/viewapp" ></Route>
      <Route path="/*" ></Route>
    </Routes>
  </Router>
)