/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Cart from "./containers/Cart/Cart";
import Checkout from "./containers/NewCheckout/Checkout";
import OrderPlaced from "./containers/OrderPlaced/OrderPlaced";
import OrderDetails from "./containers/OrderDetails/OrderDetails";
import Footer from "./components/Footer/Footer";
import Payment from "./containers/Payment/Payment";
import SearchResults from "./containers/SearchResults/SearchResults";
import Products from "./containers/Products/Products";
import ProductDisplay from "./containers/Products/ProductDisplay";
import Registration from "./containers/UserManagement/Registration/Registration";
import Login from "./containers/UserManagement/Login/Login";
import ForgotPassword from "./containers/UserManagement/ForgotPassword/ForgotPassword";
import Profile from "./containers/UserManagement/Profile";
import AddProduct from "./containers/Product/AddProduct";
import Items from "./containers/Product/Items";
import UpdateProduct from "./containers/Product/UpdateProduct";
import FormUpload from "./containers/Blogs/Formupload";
import Newblog from "./containers/Blogs/ShowBlog";
import AdminHome from "./containers/AdminHome/AdminHome";
import Verifyblog from "./containers/Blogs/Verifyblog";
import BookTest from "./containers/Covid19Test/BookTest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Career from "./containers/Career/Career";
import AddCareer from "./containers/Career/AddCareer";
import UpdateCareer from "./containers/Career/UpdateCareer";
import JobApply from "./containers/Career/JobApply";
import UserCareer from "./containers/Career/UserCareer";
import ViewApplication from "./containers/Career/ViewApplication";
import VerifyingBlog from "./containers/Blogs/VerifyingBlog";
import DoctorAppointment from "./containers/DoctorAppointment/DoctorAppointment";
import BookedAppointment from "./containers/DoctorAppointment/BookedAppointment";
import Error from "./containers/Error/Error";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AdminHome" element={<AdminHome />} />
          <Route exact path="/Register" element={<Registration />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
          {<Route exact path="/Cart" element={<Cart />} />}
          <Route exact path="/Products" element={<Products />} />
          <Route
            exact
            path="/ProductDisplay/:id"
            element={<ProductDisplay />}
          />
          <Route exact path="/Checkout" element={<Checkout />} />
          <Route exact path="/Checkout/OrderPlaced" element={<OrderPlaced />} />
          <Route exact path="/Checkout/Payment" element={<Payment />} />
          <Route exact path="/OrderDetails" element={<OrderDetails />} />
          <Route exact path="/SearchResults" element={<SearchResults />} />
          <Route exact path="/DoctorAppointment" element={<DoctorAppointment />} />
          <Route
            exact
            path="/BookedAppointment/:id"
            element={<BookedAppointment />}
          />
          <Route path="/items">
            <Route path=":productid" element={<UpdateProduct />}></Route>
            <Route index element={<Items></Items>}></Route>
          </Route>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/postblog" element={<FormUpload />} />
          <Route path="/viewBlog" element={<Newblog />} />
          <Route path="/validateBlog" element={<Verifyblog />} />
          <Route path="/validatingBlog" element={<VerifyingBlog />} />
          <Route path="/BookTest" element={<BookTest />} />
          <Route path="/career">
            <Route path=":jobid" element={<UpdateCareer />}></Route>
            <Route index element={<Career></Career>}></Route>
          </Route>
          <Route path="/addcareer" element={<AddCareer />} />
          <Route path="/viewcareer">
            <Route path=":jobid" element={<JobApply />}></Route>
            <Route index element={<UserCareer></UserCareer>}>
              {" "}
            </Route>
          </Route>
          <Route path="/viewapp" element={<ViewApplication />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </div>
  );
}

export default App;
