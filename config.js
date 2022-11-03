import firebase from "firebase";

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA7f_uNn2Cy_2uCgmr2ZR_u4wbMeXZTOy8",
  authDomain: "team-voting-app-785e2.firebaseapp.com",
  projectId: "team-voting-app-785e2",
  storageBucket: "team-voting-app-785e2.appspot.com",
  messagingSenderId: "588263405532",
  appId: "1:588263405532:web:759d7500b562c35262c119",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
