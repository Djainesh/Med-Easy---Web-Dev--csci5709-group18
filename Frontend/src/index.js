/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from './app/store';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const stripePromise = loadStripe('pk_test_51KgVtMLF0IW9HE4HhcKIe9pGKRWxMShwKi2HQ2bwiRYJFxJLY2o3gYSop15iI2QoKq5TygmSHh0Cnzncb8jS8YcO00Qwv99kej');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>  
  </React.StrictMode>,  
  document.getElementById('root')
  );


