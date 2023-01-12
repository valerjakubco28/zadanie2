import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDjS3kMaQ0Y8X9O_Ai3ayWFgg8b4XGVWwM",
    authDomain: "zadaniewebove.firebaseapp.com",
    projectId: "zadaniewebove",
    storageBucket: "zadaniewebove.appspot.com",
    messagingSenderId: "199911925256",
    appId: "1:199911925256:web:6bc141d055db4abc69d3bd"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}