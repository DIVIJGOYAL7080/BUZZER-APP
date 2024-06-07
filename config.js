import firebase from 'firebase'; 


const firebaseConfig = {
  apiKey: "AIzaSyBL2ALGg-Cj_HHQif4TIVVesO0yHG9sTfY",
  authDomain: "buzzerapp-e4b4f.firebaseapp.com",
  databaseURL: "https://buzzerapp-e4b4f.firebaseio.com",
  projectId: "buzzerapp-e4b4f",
  storageBucket: "buzzerapp-e4b4f.appspot.com",
  messagingSenderId: "875397442562",
  appId: "1:875397442562:web:c5058b334e93d9cf298b1b",
  measurementId: "G-TGC9JGD4D1"
};
// Initialize Firebase 
if(!firebase.apps.length)
{ 
  firebase.initializeApp(firebaseConfig);
 }
export default firebase.database();
