// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const name = document.getElementById("name");
const age = document.getElementById("number");


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwmthvmKUbUn7L81Tztr9FycooNnJ2igU",
    authDomain: "fir-02-50e57.firebaseapp.com",
    projectId: "fir-02-50e57",
    storageBucket: "fir-02-50e57.appspot.com",
    messagingSenderId: "303780605597",
    appId: "1:303780605597:web:eb551d68e521504ad0ae74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("submit").onclick = async() => {
    try {
        const docRef = await addDoc(collection(db, "students"), {
          name: name.value,
          age: age.value,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
  