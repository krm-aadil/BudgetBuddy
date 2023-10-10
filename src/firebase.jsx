// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Qs7LHfDtiFEsqb8PYTplVZVzpmHnEW4",
  authDomain: "budget-buddy-6ab2d.firebaseapp.com",
  projectId: "budget-buddy-6ab2d",
  storageBucket: "budget-buddy-6ab2d.appspot.com",
  messagingSenderId: "444358194156",
  appId: "1:444358194156:web:82c3ed4ff8c634db0106c9",
  measurementId: "G-L36H00GW38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export { app,auth,logout };