# CSCI5709 Project - Advanced Topics in Web Development

# (MedEasy Application - Group 18)#

# MedEasy Objective
* The primary goal of our Web application, Med Easy is to make it easier for the public to order medicines and other medicinal 
equipment remotely – online, by becoming a one-stop-shop to all thing’s pharmacy. While there are several pharmacies deployed everywhere, there are still places where these medical stores are not always accessible. For example, there might be a medical store nearby, but it might not be open during some hours and not everyone is expected to be able to physically go to the store and pickup their medicines. This is especially true in today’s pandemic plagued world where social distancing and isolating have become the new normal.  

* To tackle these kinds of scenarios and make the pharmacy much more accessible to everyone, we have come up with the idea of Med Easy. For the first phase of our application, we are targeting the most essential features to be readily available for the users and then in the later stages of our application we can improve the scope of our project depending upon the feasibility. 

* Date Created: February 10, 2022
* Last Modification Date: April 11, 2022

# Group 18's - Git Details (this would be group repo links)  # 
* Group 18 Repository NAME:  CSCI5709_Group18
* Group 18 Repository GIT LINK (Main Branch): https://git.cs.dal.ca/ngoswami/csci5709_group18
* Group 18 Deployment Link for Heroku: https://medeasy-group18.herokuapp.com/


### Authors
* [Chandan Shukla](chandan.shukla@dal.ca) - *(Developer)*
* [Jainesh Desai](jainesh@dal.ca) - *(Developer)*
* [Aditya Busam](aditya.busam@dal.ca) - *(Developer)*
* [Dhruv Soni](dh554152@dal.ca) - *(Developer)*
* [Neelay Goswami](neelaygoswami@dal.ca) - *(Developer)*
* [Saloni Raythatha](sl768578@dal.ca) - *(Developer)*

### Instructor
* [@gmosqueraj](https://github.com/gmosqueraj)

### Teaching Assistants
* Hari Arunachalam [(@haria)]
* Nikunj Goenka [@goenka]
* Shehzeen Huda [@shehzeen]
* Yash Jaiswal [@yna]
* Bala Sundeep Krishna Dasar [@bdasari]
* Kshitij Paithankar [@paithankar]
* Neharika Sehgal [@nsehgal]
* Gurleen Saluja [@gsaluja]
* Ana Khan [@anan]
* Mansi Singh [@mansis]


**Below is the demo/sample user for testing our application**
<pre>
For testing Search Box functionality it is not needed but for other features, you can use as below:
Normal User
email: testuser@gmail.com
password: Test@123

Admin User
email: testadmin@gmail.com
password: Test@123

Payment Card details:
Card No: 4242 4242 4242 4242
Card Expiry: 12/34
Card Cvv: 123
Name on Card: Any
Pin Code: Any
</pre>


## For the Backend part of our project, it communicates with Frontend using APIs. ##
* models - all the application-related common models.
* controller - controller for all the features.
* routes - routes/API's.

## For the Frontend part of our project it is divided as below: ##
* containers - all features are located in the container (for instance my feature SearchResults can be found there) accordingly to everyone else's as well. 
* components - all components for eg. Header, Footer, Layout many more can be found here.


### For Frontend of our Application
* [ReactJS](https://reactjs.org/) - Javascript library for UI
* [react-bootstrap](https://react-bootstrap.github.io/) - Used to incorporate bootstrap components to style our parts.
* [axios](https://www.npmjs.com/package/axios) - Communicaiton of Backend with API and fetching the data.
* [Material UI](https://mui.com/material-ui/getting-started/installation/)  - For styling of some components
* [BootStrap] (https://react-bootstrap.github.io/getting-started/introduction/) - For styling
* [SemanticUIReact] (https://react.semantic-ui.com/) - For styling
* [SweetAlert] (https://sweetalert2.github.io/) - For styling

### For Backend of our Application
* [NodeJS](https://nodejs.org/en/) - Node JS learning for our application
* [Express](https://expressjs.com/) - Express learning for our application

### For Database
* [MongoDB] (https://www.mongodb.com/) - NoSQL Database for data storage


## Sources Used to learn and understand some functions related to react
* Online sources like "https://reactjs.org/docs/create-a-new-react-app.html" have been used to revisit some of the commands to make a react app and run on local machine.
* To understand the usage of function and class component for react - https://www.twilio.com/blog/react-choose-functional-components
* For styling/css - https://www.w3schools.com/css/
* All other react functionalities - https://reactjs.org/
* Some of the code for validation and functionalities was used for reference purposes from our group proposal and previous assignments from the class. 
* Clone the project at your local. Choose IDE like ATOM/Intellij to open the cloned project.

## Other tools and softwares used
* [Heroku] (https://dashboard.heroku.com/login) - Cloud platform to deploy application
* [Postman] (https://www.postman.com/) - API testing software
* [MongoCompass] - Tool used to check the collections and data on the database
* [MongoDB] (https://www.mongodb.com/) - NoSQL Database for data storage
* [NPM] (https://www.npmjs.com/) - Nodejs package manager
* [VSCode] (https://code.visualstudio.com/) - IDE used for development
* [Gitlab] (https://git.cs.dal.ca/) - Repository and version control system
* [MicrosoftEdge]/[GoogleChrome] (https://www.microsoft.com/en-us/edge?r=1) - Browser of choice for testing frontend changes

## Citation for all the images used from online
1. Surgical Mask = https://www.amazon.in/Disposable-Surgical-FABRIC-Earloop-Certified/dp/B096B99BDW
2. Thermometer = https://www.amazon.in/Dr-Trust-Waterproof-Flexible-Thermometer/dp/B07GSRD84M
3. Metacin = https://www.apollopharmacy.in/otc/metacin-tablet
4. Ibuprofen for kids = https://www.heb.com/product-detail/h-e-b-children-s-ibuprofen-100-mg-oral-suspension-bubble-gum-flavor/483094
5. Iburpofen Advil = https://www.tradeindia.com/products/ibuprofen-tablets-c6749541.html
6. Azithromycin = https://zeenews.india.com/health/azithromycin-potential-covid-19-drug-may-increase-risk-for-cardiac-events-2310378
7. Baby Wipes = https://www.amazon.in/Littles-Soft-Cleansing-Baby-Wipes/dp/B004X7545M
8. Blood Pressume Machine = https://www.tradeindia.com/manufacturers/digital-blood-pressure-monitor.html
9. Cough Drops = https://www.metromarket.net/p/kroger-honey-lemon-cough-drops/0004126037077
10. Crocin = https://www.lybrate.com/otc/crocin-cold-flu-max-tablet
11. Band Aid = https://www.band-aid.com/products/adhesive-bandages/skin-flex-bandages
12. HomePage Career Image = https://firebasestorage.googleapis.com/v0/b/medeasyproduct.appspot.com/o/images%2FCareers.jpg?alt=media&token=24619688-482b-4330-8cad-76d943d036be
13. HomePage Blog Image =https://firebasestorage.googleapis.com/v0/b/medeasyproduct.appspot.com/o/images%2Fblog%20(1).jpg?alt=media&token=f9ba9c6c-823a-424e-a3f0-0830e70d1a47
14. HomePage Medicine Image = https://theconversation.com/what-is-medicine-why-its-so-important-to-answer-this-question-108433

##  --------------------------------Details About All Features------------------------------- ##


## Feature: User Authentication and User Management
<pre>
My feature in the MedEasy web application that I have implemented is User Authentication and User Management Module. It provides the users an easy gateway to the MedEasy web application by securely gathering the various details required for an account creation at the time of registration and then using those credentials to login to the application to access the various features of our website. Special precautions have been taken by implementing a token based system which makes sure that the user accessing the features has been cleared of authentication.
 
The different functions this feature enables are:
 
* User registration/ sign-up process
* User login/ authentication
* Changing password of the user by accessing the profile page
* Resetting the password of the user in case they no longer have access to the old password
* Displaying the profile for a logged in user
 
## Files developed by me for the backend section
Below are the various folders & files and their links in the Gitlab repository for the user authentication and user management feature's backend:
 
* Folder - [/Backend/constants] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/constants) 
	* [constants.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/constants/Constants.js) - To store data related to JWT token

* Folder - [/Backend/controllers] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/controllers)
	* [userController.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/controllers/userController.js) - Backend logic for registration, login and forgot password functionalities
	* [userprofileController.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/controllers/userprofileController.js) - Backend logic for profile, user details and change password
	
* Folder - [/Backend/models] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/models)
	* [userModel.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/models/userModel.js) - Database schema for setting up an user
	
* Folder - [/Backend/routes] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/routes)
	* [userRoute.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/routes/userRoute.js) - Rest API endpoints for registration, login and forgot password
	* [userprofileRoute.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/routes/userprofileRoute.js) - Rest API endpoints for profile, user details and change password
	
* Note: Common File in /Backend
 * [Server.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/Server.js) - Configuration of JWT token and calling userRoute.
 
## Files developed by me for the frontend section
Below are the various folder & files and their links in the Gitlab repository for the user authentication and user management feature's frontend:

* Folder - [/Frontend/src/containers/UserManagement] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/containers/UserManagement)
	* Folder - [/Frontend/src/containers/UserManagement/ForgotPassword] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/containers/UserManagement/ForgotPassword)
		* [ForgotPassword.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/UserManagement/ForgotPassword/ForgotPassword.js) - Frontend logic for forgot password
	* Folder - [/Frontend/src/containers/UserManagement/Login] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/containers/UserManagement/Login)
		* [Login.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/UserManagement/Login/Login.js) - Frontend logic for login
	* Folder - [/Frontend/src/containers/UserManagement/Registration] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/containers/UserManagement/Registration)
		* [Registration.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/UserManagement/Registration/Registration.js) - Frontend logic for registration
	* [Profile.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/UserManagement/Profile.js) - Frontend logic for user profile
	
* Note: Common File in /Frontend/src
 * [App.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/App.js) - URI endpoints for registration, login, forgot password and user profile
 
## Code Integration

User authentication and user management feature is independent and doesn't depend on any other features. However, the common files such as app.js in frontend and server.js in backend where the team collaborated and appended those files based on the requirement and resolved the conflicts whenever they've arised. 
The JWT token was on part of my feature which others in the team utilized whenever they send request to backend and also need to check for the validity of the user.
</pre>


## Feature: Checkout and Payment
<pre>
I have taken the feature of checkout and payment to be developed for the Assignment 3 task. I have designed the payment feature for the MedEasy application which i have integrated with the stripe payment interface. I have created the Checkout Page where the user fills in the shipping details, then user click on place order. On the Payments page there is information for billing address after which the user can select the payment type. Currently there is only one payment type that is credit/debit card. Once we click on the place now button, you gets redirected to the Stripe checkout session where the user need to fill in the card details(test card) that are provided below. Once the user fills in the details the mandate details and click place order then it get validated from the stripe end and then you get redirected to order placed page. On the Success order place page there is option to view order details, once the user click on the order details button then, it get redirected to Order Details page where he will be able to see his orders. 

pre condition - user must be logged in
card number - 4242 4242 4242 4242
expiry date  - 1234
cvv - 123

name - any name you can add
Zipcode  -  6 digit number

## files developed by me for the front end application

Below are the various folder and files that arepresent inside the Frontend folder that is present inside the root directory

*   Folder - [/Frontend/src/components/Footer/] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/components/Footer)
    Footer.jsx
    Footer.css

*   Folder - [/Frontend/src/components/Header/] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/components/Header)
    Header.jsx
    Header.css
    
*   Folder - [/Frontend/src/components/HeaderNew/] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/components/HeaderNew)
    Header.jsx
    Header.css

*   Folder - [/Frontend/src/components/Layout/] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/components/Layout)
    Layout.jsx
    Layout.css
    
*   Folder - [/Frontend/src/components/NavElements/] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/components/NavElements)
    NavElements.jsx

*   Folder - [/Frontend/src/components/PageTitle/] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/components/PageTitle)
    PageTitle.jsx
    
*   Folder - [/Frontend/src/components/Topbar/] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/components/Topbar)
    SideBar.jsx

*   Folder - [/Frontend/src/containers/NewCheckout] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/containers/NewCheckout)
    Checkout.jsx
    Checkout.css
    
*   Folder - [/Frontend/src/containers/OrderDetails] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/containers/OrderDetails)
    OrderDetails.jsx
    OrderDetails.css
    
*   Folder  - [/Frontend/src/containers/OrderPlaced] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/containers/OrderPlaced)
    OrderPlaced.jsx
    OrderPlaced.css

*   Folder - [/Frontend/src/containers/Payment] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/containers/Payment)
    Payment.jsx
    Payment.css

*   Folder  - [/Frontend/src/features/payment] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/features/payment)
    PaymentAmount.js
    PaymentType.js
    
*   Folder - [/Frontend/src/app] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src/app)
    store.js
    
*   Folder - [/Frontend/src/] - (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/tree/main/Frontend/src)
    app.js
    index.js


## Files developed by me for the backend application

*   Folder - [/Backend/controllers]
    orderController.js
    stripePaymentController.js
    
*   Folder - [/Backend/db]
    connect.js

*   Folder - [/Backend/models]
    orderModel.js
    
*   Folder - [/Backend/routes]
    orderRoute.js
    stripePaymentRoute.js
    
*   Folder - [/Backend/]
    App.js
    Server.js


## Code Integration

Checkout and Payment module was directly dependent on the cart management modeule and user management module. As only the registered user must be allowed to place the order by paying for the goods cost. At the same time if there would be no item in the cart then user cannot buy any product. I have actively collaborated with the team members who were working on these modules for a smooth integration experience. Overall worked with the team to develop the common elements that were used throughout the website. Finally we have intergated the code, build our react application and then deployed our final application on the Heroku platform.


### NaveElements.jsx
<pre>
export const Nav = styled.nav`
    background: linear-gradient(to right, #1A374D , #11999E 60%, #E4F9F5);
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem cacl((100vw - 1000px)/2);
    z-index: 15;

    @media screen and (max-width: 1200px){
        transition: 0.8s all ease;
    }
`
export const NavBrand = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.2rem;
    height: 100%;
    cursor: pointer;
    margin-left: 0.5rem;
    font-size: 25px;
    &.active{
        color: #fff;
    }
`
export const NavLink = styled(Link)`
    color: #1A374D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem;
    height: 100%;
    cursor: pointer;
    margin-left: 0.5rem;
    &.active{
        color: #11999E;
    }
    &:hover {
        color: #11999E;
        border-bottom: 3px solid #147581;
      }
`
export const SideBarMenuWrap = styled.div`
  color: #11999E;
`;
export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #E4F9F5;
  cursor: pointer;
  
  &:hover{
    color: #11999E;
    background: #E4F9F5;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBarMenu = styled.div`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
</pre>

Utilised these to build the responsive navbar, it was an efficient code and the end result was great. I have modified this code as per our applications requirement
* Material UI Grid - https://mui.com/components/grid/
* Material UI Stack - https://mui.com/components/stack/
* Material UI Paper - https://mui.com/components/paper/
* Material UI Box - https://mui.com/components/box/
* Material UI Accordion - https://mui.com/components/accordion/
* Material UI TextField - https://mui.com/components/text-fields/
* Material UI Radio button - https://mui.com/components/radio-buttons/
* React NavBar - https://www.youtube.com/watch?v=VzWBLj_CfpE&ab_channel=BrianDesign
* Stripe Payment API - https://stripe.com/docs/api
</pre>


## Feature Name: Rating and Review
<pre>
*[Task of feature]*
User can give rating and review
User can  write a review a feature

*[List of File of the feature Raiting and Review]*

*[Description]* This ProductDisplay.js file has two authors Dhruv soni and jainesh Ketan Desai from which jainesh Ketan Desai feature is to display rating and review on the particular product page.

 
* Author: [Jainesh Ketan Desai](jainesh@dal.ca) - (Maintainer)
* Author: [Dhruv soni](dh554152@dal.ca) - (Maintainer)

*[Sources Used]

  * [Material UI]
  * [BootStrap]


* [File Name]

* [ProductDisplay.js] (Frontend\src\containers\Products\ProductDisplay.js)
* [ProductDisplay.css] (Frontend\src\containers\Products\css\ProductDisplay.css)
* [Ratingandrev.js] (Backend\models\Ratingandrev.js)
* [ReviewandRatingController.js] (Backend\controllers\ReviewandRatingController.js)



- <!---How---> [MUI](https://mui.com/components/rating/) was referred by me to implement rating and rating feature for user interaction in [ProductDisplay.js] .
- <!---Why---> [MUI](https://mui.com/components/rating/) was implemented by me and modified by me for user interaction purpose and getting better desing for the feature in [ProductDisplay.js].
- <!---How---> [MUI](https://mui.com/components/rating/) Code was modified by me and implemented by me for implementing rating and review feature for getting rating from the user.
 

- <!---How---> [MUI](https://mui.com/components/dividers/) was referred by me to implement to show and Display rating and rating posted by other user in file name [ProductDisplay.js].
- <!---Why---> [MUI](https://mui.com/components/dividers/) was implemented by me and modified by me for user interaction purpose and getting better desing for the feature Rating and review in the file name [ProductDisplay.js].
- <!---How---> [NAME](https://mui.com/components/dividers/)'s Code was modified by me and for showing rating and review of the other user


- <!---Why---> [bootstrap](https://getbootstrap.com/) was implemented by me and modified by me for the feature named Rating and review in the file name [ProductDisplay.js] for getting better styling in form.
- <!---How---> [bootstrap](https://getbootstrap.com/) was referred by me to implement to show and Display rating and rating posted by other user in file name [ProductDisplay.js] for getting better styling and css for make ui and UX good.	

</pre>


## Feature Name: Blog 
<pre>
* Author: [Jainesh Ketan Desai](jainesh@dal.ca) - (Maintainer)

*[Description]*
Blog feature is divided into two part from which is first at user-end and second is admin part.In the user-end part user can post blog and view blog for which if user wants to post the blog user needs to login and for view blog blog login is not needed.Furthermore, at the admin side admin can either accept or reject the blog which is posted by the user once the blog is accepted by admin it will shown to user side end and if rejected then it will be not shown to user at user-side.    

*[Task of feature]

    * User can post the blog
    * User can view blog 
    * Admin can accept or reject the blog posted by user

## Sources Used
Material UI
BootStrap
Semantic UI React

### File Name

* [Formupload.js] (Frontend\src\containers\Blogs\Formupload.js)
* [Form.css] (Frontend\src\containers\Blogs\Css\Form.css)
* [ShowBlog.js] (Frontend\src\containers\Blogs\ShowBlog.js)
* [Verifyblog.js] (Frontend\src\containers\Blogs\Verifyblog.js)
* [VerifyingBlog.js] (Frontend\src\containers\Blogs\VerifyingBlog.js)


- <!---How---> [MUI](https://mui.com/material-ui/react-card/) was referred by me to implement showBlog task for making showblog task  more organized in look [ShowBlog.js] .
- <!---Why---> [MUI](https://mui.com/material-ui/react-card/) was implemented by me and modified by me for user interaction purpose and getting better desing for the feature in [ShowBlog.js].
- <!---How---> [MUI](https://mui.com/material-ui/react-card/) Code was modified by me and implemented by me for implementing showblog task for making page responsive and making look of show blog more organized 

- <!---How---> [MUI](https://react.semantic-ui.com/collections/table/) was referred by me to implement to blog verification at admin side [Verifyblog.js].
- <!---Why---> [MUI](https://react.semantic-ui.com/collections/table/) was implemented by me and modified by me for user interaction purpose and getting better desing for the table in the file name [Verifyblog.js].
- <!---How---> [NAME](https://react.semantic-ui.com/collections/table/)'s Code was modified by me and for showing table at admin side for getting better UI and UX.


- <!---Why---> [bootstrap](https://getbootstrap.com/) was implemented by me and modified by me for the task post blog in fle named [Formupload.js] for getting better styling in form.
- <!---How---> [bootstrap](https://getbootstrap.com/) was referred by me to implement to show and Display rating and rating posted by other user in file name [Formupload.js] for getting better styling and css for make ui and UX good.	 

- <!---Why & How---> [Source Unsplash](https://source.unsplash.com/) was implemented by me in show blog task 
for getting the dynamic images of the specified name for displaying images which was used in blog feature.
</pre>


## Feature Name: Search Box
<pre>

In the medicine search box feature, the main aim of the feature is to display the results that the user/patient is looking for. More precisely if a user is looking for any medicine/medical product following a specific type, brand, price and dose amount they should be able to easily do it. So, the way it would work is, the user types for any medicine or medical product and the results will be displayed. Several results will be displayed, and on the left side of the navigation page, there will be filter functionality that allows results to be filtered according to the given options.  

# Tasks of the feature #
#### 1) Search & Display
User enters the product name on the Search box and hits the search button, it takes the user to the search results page and the products that are available will be fetched from the database are displayed. Since the search box is located in the Header the initial logic can be found in the /HeaderNew/Header.jsx file. 


#### 2) Filter & Display
User is keen on applying filters for specific products so looks for a particular brand, type, price and dose and hence on the respective available options the product will be updated. On a non-matching item, it will throw an error message.


# Frontend files and repo links for Search Box #
* Frontend/src/components/HeaderNew/Header.jsx  --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/components/HeaderNew/Header.jsx

* Frontend/src/containers/SearchResults/SearchResults.jsx --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/SearchResults/SearchResults.jsx

* Frontend/src/containers/SearchResults/SearchResultsContext.jsx --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/SearchResults/SearchResultsContext.jsx

* Frontend/src/containers/SearchResults/css/SearchResults.css --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/SearchResults/css/SearchResults.css


# Backend files and repo links for Search Box #
* Backend/controllers/searchController.js --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/controllers/searchController.js

* Backend/models/productModel.js --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/models/productModel.js

* Backend/routes/searchRoute.js --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/routes/searchRoute.js


# Mongo Db #
* I have added a variety of items in the database so that users can have multiple options to select from. 


# Testing Search Box #
   * Step 1 = Enter any medicine or product name from the below list in the search box and click the search button.
      * List of expected inputs are = {Metacin, Mask, Surgical Mask, Thermometer, Ibuprofen, Azithromycin, Baby Wipes, Cough Drops, B.P Machine, Crocin, Paracetamol many more are some valid inputs}

   * On empty input, it will not let you navigate to search results.

   * On random input it will simply show an error image like "No matching item in database"

   * Step 2 = Once you enter valid input for eg. Metacin (in this case) or relative entries like "me", "met", "meta", "m" it will display the relative results. 

   * Step 3 = Look at the left corner and you can apply Filter Criteria from 'Product Type', 'Brands', 'Price', 'Dose'.

   * Step 4 = If the product (in this case Metacin) has matching filter criteria the results will update or else it will say "No matching item in the database, try different filter criteria"

   * Step 5 = Under the results of the product(in this case Metacin) there is a button called "View Product". This will allow you to further proceed to view the details and other functionality like review, add to cart etc. 


## Integration part ##
In order to integrate our application's backend with UI(frontend), axios is used to make API requests and it will return the data. That data is then used in our React application to further process the rest of the functionalities like login/register, search, update, delete, review and many more. 

For Search Box feature, it starts with search input in the Header Section of the application. Throughout the application search box is present in the Header and the user can search for the desired product and it will navigate them to the results. The data is fetched from the MongoDB database using axios(API calls) and all the results are displayed that match the user's input. Further the results are filtered using the fetched results to update the available results. Displaying the desired product results is a crucial part of this application which I have worked on as other functionalities like add to cart, payment, view product details, update/delete products are highly dependent on it. 
</pre>


## Feature Name: Doctor Appointment
<pre>

# Tasks of the feature #
#### 1) View and Filter Doctor based on 'Speciality' & 'Gender'
User is at doctor appointment page and based on all the available doctor list, they can filter based on Speciality(for eg. Surgery, Homeopathy, Ayurvedic and much more) and Gender. 


#### 2) Check availability and book doctor’s appointment
After the results are filtered based on choice, user can further view the details and book the doctor's appointment on available timings. After clicking on "Current Availability", the user can confirm the Appointment with that specific doctor. 


# Frontend files and repo links for Doctor's Appointment #

* Frontend/src/components/HeaderNew/Header.jsx --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/components/HeaderNew/Header.jsx

Frontend/src/containers/DoctorAppointment/DoctorAppointment.jsx --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/DoctorAppointment/DoctorAppointment.jsx

Frontend/src/containers/DoctorAppointment/BookedAppointment.jsx --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/DoctorAppointment/BookedAppointment.jsx

Frontend/src/containers/DoctorAppointment/css/DoctorAppointment.css --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/containers/DoctorAppointment/css/DoctorAppointment.css


# Backend files and repo links for Doctor Appointment #
* Backend/controllers/doctorAppointmentController.js -->  https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/controllers/doctorAppointmentController.js

* Backend/models/doctorAppointmentModel.js --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/models/doctorAppointmentModel.js

* Backend/routes/doctorAppointmentRoute.js --> https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Backend/routes/doctorAppointmentRoute.js


# Mongo Db #
* I have added a variety of items in the database so that users can view multiple list of available doctors..

## Integration part ##
> For Doctor's Appointment, the starting point is in Header and that is why it is integrated with the Headerfile. Later on the in the feature user is able to view doctor list and book the appointment based on the availability shown. The data is fetched from the MongoDB database using axios(API calls) and all the results are displayed once the user is on Doctor Appointment page. This feature is one of the good to have features because our application is a pharmacy online platform that provides convinience to customer's especially patients and that is why this feature works as quality add-on feature. 
</pre>
## Feature Name:Cart Management

<pre>
* Author: [Dhruv Soni](dh554152@dal.ca) - (Maintainer)
Description of feature: Cart management is essential part of our web application in which user cart gets handled.Every time customer want to purchase medicine they need to go through add to cart button which will add the product(medicine) to the cart and then from the cart user can increase or decrease the quantity of that product and go further for checkout.


## Task Of the Above feature
- Product Display after clicking on Products Button.
- Particular Product Display adn watching reviews ansubmitting reviews.
- Adding into cart that particular product.
- Increase and Decrease quantity of the product in the cart.
- Remove particluar product from the cart.
- proceed to checkout.

##  Code Integration
Cart management feature is partially dependent on the seatch product and review rating feature.With use of my endpoints they have successfully merged my code with them and Now our web application is fully fucntional and working as expected.Some of the common code area is file which contains the routing section in our case for frontend opart it is app.js where we needed to route our component so that other team-mates can sue it and for backend part it was server.js.

## File Names:

### 1. Frontend Files developed by me

- src/Contants/api.js
-src/containers/Cart/Cart.css
-src/containers/Cart/Cart.jsx
-src/containers/Products/css/ProductDisplay.css
-src/containers/Products/ProductDisplay.js
-src/containers/Products/products.js
-src/images/medicine.svg
common code
* Note: Common File in /Frontend/src
* [App.js] (https://git.cs.dal.ca/ngoswami/csci5709_group18/-/blob/main/Frontend/src/App.js) - URI endpoints for ProductDisplay ,Addtocart and cart management
    

    `{<Route exact path="/Cart" element={<Cart />} />}
     <Route exact path="/Products" element={<Products />}/>  
     <Route exact  path="/ProductDisplay/:id" element={<ProductDisplay />}/> `

          
### 2. Backend Files developed by me

- server.js
- controllers/productController
- controllers/updateController
- routes/addtocart.js
- routes/productdisplay.js
- routes/updateCart.js

## Endpoints for the API calls
- GET:- /api/v1/Products
- GET:- /api/v1/Products/:id
- PUT:- /api/v1/AddtoCart
- GET:- /api/v1/getCartItems/:email
- PUT:- /api/v1/updateCartItems/:productID
- PUT:- /api/v1/decreaseCartItems/:productID
- PUT:- /api/v1/removeCartItem/:productID


</pre>

## Feature Name: Product Management (Admin Side)
<pre>

# Tasks of the feature #


#### 1) View Product
Admin able to view products that have been previously added
to the inventory of the system. These added product will be
visible on the user side.


#### 2) Add Product
Admin can add new product in the inventory of the system as
per their needs. Where admin has to enter product name, price,
dose, brand, quantity.


#### 3) Update Product
If there is a need to update product information admin can use this
feature by clicking on the update button of the desired product and
they will enter the new information


#### 4) Delete Product
If admin wants to delete the product from the inventory they can do by clicking
on the Delete button on the desired product.


## List of Files of the feature Product Management Admin Side


* Directory for Frontend csci5709_group18\Frontend\src\containers\Product

* [AddProduct.js] (Frontend\src\containers\Product\AddProduct.js) - Used for adding product on admin side
* [items.js] (Frontend\src\containers\Product\items.js) - Used for Viewing all the added product to the System
* [UpdateProduct.js] (Frontend\src\containers\Product\UpdateProduct.js) - Used for updating details of the product that are already in the inventory 
* [Product.css] (Frontend\src\containers\Product\Product.css) - Css for all the part of Product Management Functions
* [firebase.js] (Frontend\src\containers\Product\firebase.js) - Configuration file to access and store Images on Google Firebase for remote accessibility 

* Directory for Backend
* [productModel.js] - csci5709_group18\Backend\models\productModel.js
* [productRoute.js] - csci5709_group18\Backend\routes\productRoute.js


## References 
Material UI
React BootStrap
Google Firebase


### File Name
Items.js
AddProduct.js
UpdateProduct.js
firebase.js 


Lines 122 - 276 in AddProduct.js,UpdateProduct.js

- <!---How---> [MUI](https://mui.com/components/text-fields/) was referred by me to implement the UI part of AddProduct, Update Product task in [AddProduct.js, UpdateProduct.js] .
- <!---Why---> [MUI](https://mui.com/components/text-fields/) was implemented by me and modified for improving user interaction [AddProduct.js, UpdateProduct.js].
- <!---How---> [MUI](https://mui.com/components/test-fields/) Code contents were modified and implemented by me to Add Product and Update Product task on admin side of the website.

Lines 66 - 99 in Items.js
Lines 53 - 57 in AddProduct.js, UpdateProduct.js

- <!---How---> [ReactBootstrap]https://react-bootstrap.github.io/components/cards/) was referred by me to implement to Display all the products present in the inventory [items.js].
- <!---Why---> [ReactBootstrap](https://react-bootstrap.github.io/components/cards/) was implemented and modified by me for improving User Interface of the products shown [items.js].
- <!---How---> [ReactBootstrap](https://react-bootstrap.github.io/components/cards/)'s Code contents were modified in terms of text fields in file [items.js]

Lines 3 - 15 in firebase.js

- <!---How---> [Firebase](https://firebase.google.com/) was referred by me and modified for configuration of Firebase in file [firebase.js].
- <!---Why---> [Firebase](https://firebase.google.com/) was implemented and modified by me for storing images on Firebase [firebase.js]. 
- <!---How---> [Firebase](https://firebase.google.com/)Code was referred by me and modified for configuration of Firebase where I have used the Getdownload Url function to get the link of the image and store it in mongodb using moogose in file [firebase.js]. 


# Testing Product Management

* Login/Sign-up(As Administrator)<https://medeasy-group18.herokuapp.com/> -> Admin Product Page(<https://medeasy-group18.herokuapp.com/items>) (To view  all the products)
* To add Product -> Click on Add Product Button -> Add Product Page -> Fill the details and Upload Image-> Click Add Product button -> Click on Back to Admin Product Page to move to Admin Product Page
* To update Product-> Click on Update Product Button -> Update Product Page -> Change the Desired Fields-> Click Update Product Button -> Click on Back to Admin Product Page button in Browser to View Updated Product
* To Delete Product-> Click on the Delete Button -> Product Deleted from the List


Note 1: On completion of Operation like Add Product and Update product to redirect back to main product page click on Back to Admin Product Page button, if you click 
on products button on navbar you will be able to see user side version of Product Page.

Note 2: To access admin dashboard use email: testadmin@gmail.com and Password: Test@123 or
Generate a new account with Administrator Role

</pre>

## Feature Name: Career Management (Admin Side, User Side)
<pre>

# Tasks of the feature on Admin Side #
#### 1) Add Job Posting
Admin can add job posting for the website using this
task and on adding this job posting it will be visible on 
user side part of Career.


#### 2) View Added Job Posting
Admin can view past added Job Posting on the website.
 
#### 3) Update Job Posting
Admin can update the Job posting requirement if there 
is changes in the job description

#### 4) Delete Job Posting
If Job has been filled admin can delete the job posting
as per their wish.


#### 5) View Application
Admin can view all the application related to specific jobs
that have been submitted on user side.

# Tasks of the feature on User Side #
#### 1) View Job Posting
On Med-Easy user side, user can view job posting that
has been added by admin.

#### 2) Apply to the Job
On Med-Easy User Side, user can apply to job by clicking on the
apply button of the any given job.

## List of Files of the feature Career Management on Admin Side


* Directory for Frontend csci5709_group18\Frontend\src\containers\Career

# Frontend files and repo links for Career Management on Admin Side #
* [AddCareer.js] (Frontend\src\containers\Career\AddCareer.js) - Used for adding job posting on admin side
* [Career.js] (Frontend\src\containers\Career\Career.js) - Used for viewing job posting on admin side
* [UpdateCareer.js] (Frontend\src\containers\Career\Career.js) - Used for Updating job posting details on admin side
* [ViewApplication.js] (Frontend\src\containers\Career\ViewApplication.js) - Used for View job specific application recieved on the
career page by user
* [Career.css] (Frontend\src\containers\Career\CSS\Career.css) - Used for Applying CSS in whole Feature this file is common to both Admin and User Side.

# Frontend files and repo links for Career Management on User Side #
* [UserCareer.js] (Frontend\src\containers\Career\UserCareer.js) - Used to view application on User Career's Page
* [JobAppy.js] (Frontend\src\containers\Career\JobApply.js) - Used to apply for job on User Career's Page


* Directory for Backend
* [careerModel.js] - csci5709_group18\Backend\models\careerModel.js
* [jobapplyModel.js] - csci5709_group18\Backend\models\jobapplyModel.js
* [careerRoute.js] - csci5709_group18\Backend\routes\careerRoute.js
* [jobapplyRoute.js] - csci5709_group18\Backend\routes\jobapplyRoute.js


## References 
Material UI
React BootStrap
Google Firebase


### File Name
AddCareer.js
Career.js
UpdateCareer.js
ViewApplication.js
UserCareer.js
JobApply.js
firebase.js (imported from Product Directory)


Lines 89 - 199 in AddCareer.js,UpdateCareer.js
Lines 127 - 246 in JobApply.js

- <!---How---> [MUI](https://mui.com/components/text-fields/) was referred by me to implement the UI part of AddCareer, UpdateCareer task in [AddCareer.js, UpdateCareer.js] .
- <!---Why---> [MUI](https://mui.com/components/text-fields/) was implemented by me and modified for improving user interaction [AddCareer.js, UpdateCareer.js].
- <!---How---> [MUI](https://mui.com/components/test-fields/) Code contents were modified and implemented by me to Add Product and Update Product task on admin side of the website.

Lines 86 - 119 in Career.js
Lines 76 - 79 in AddCareer.js, UpdateCareer.js
Lines 42 - 70 in UserCareer.js
Lines 52 - 84 in ViewApplication.js

- <!---How---> [ReactBootstrap]https://react-bootstrap.github.io/components/cards/) was referred by me to implement to Display all the Job Posting in Career and UserCareer,
 is also used in ViewApplication Page on Admin side to view Job Application of Website [Career.js, UserCarrer.js, ViewApplication.js, AddCareer.js, UpdateCareer.js, ViewApplication.js].
- <!---Why---> [ReactBootstrap](https://react-bootstrap.github.io/components/cards/) was implemented and modified by me for improving User Interface of the products shown [Career.js, UserCarrer.js, ViewApplication.js, AddCareer.js, UpdateCareer.js, ViewApplication.js].
- <!---How---> [ReactBootstrap](https://react-bootstrap.github.io/components/cards/)'s Code contents were modified in terms of text fields in files [Career.js, UserCarrer.js, ViewApplication.js, AddCareer.js, UpdateCareer.js, ViewApplication.js]

Lines 3 - 15 in firebase.js

- <!---How---> [Firebase](https://firebase.google.com/) was referred by me and modified for configuration of Firebase in file [firebase.js].
- <!---Why---> [Firebase](https://firebase.google.com/) was implemented and modified by me for storing images on Firebase [firebase.js]. 
- <!---How---> [Firebase](https://firebase.google.com/)Code was referred by me and modified for configuration of Firebase where I have used the Getdownload Url function to get the link of the image and store it in mongodb using moogose in file [firebase.js]. 


# Testing Career Management

* On Admin Side:
* Login/Sign-up(As Administrator)<https://medeasy-group18.herokuapp.com/> -> Admin Career (<https://medeasy-group18.herokuapp.com/items>) (To view  all the Job Posting)
* To Add Job Posting -> Click on Add New Job Posting Button -> Add Job Posting Page -> Fill the details-> Click Add Job button -> Click on Back to Admin Career Page to move to Admin Career Page
* To Update Career-> Click on Update Career Button -> Update Career Page -> Change the Desired Fields-> Click Update Career Button -> Click on Back to Admin Career Page button in Browser to View Updated Job Posting
* To Delete Job Posting-> Click on the Delete Button -> Job Deleted from the List
* To ViewApplication-> Click on View Application Button -> Able to View all the Job Application 

* On User Side:
* Visit<https://medeasy-group18.herokuapp.com/> 
* Click on Med-Easy Careers -> View all the Job Posting -> Click on Apply on Desired Job Posting-> Fill the Details on Application Page and Submit
</pre>


## --------------------------------------Running The Application-----------------------------  ##

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites  
* Gitlab as code management repository.
* Heroku CLI for deployment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Running application locally

* Clone the git repository 
  ```
  $git clone https://git.cs.dal.ca/ngoswami/csci5709_group18.git
  ```
* Open with Visual Studio or any preferrable ide. 
