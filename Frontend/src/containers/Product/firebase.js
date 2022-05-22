// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
//Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-4NYKg8XGyyax_srE7Bbrv6ASgO2fEMA",
  authDomain: "medeasyproduct.firebaseapp.com",
  projectId: "medeasyproduct",
  storageBucket: "medeasyproduct.appspot.com",
  messagingSenderId: "951560405905",
  appId: "1:951560405905:web:d512bd5fa9f9cfd6e9d030",
  measurementId: "G-9TVHXJE5QW"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
