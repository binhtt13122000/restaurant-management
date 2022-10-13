import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUwshAAvCvcUr7DdajG1tlNj0sOVGPvXw",
    authDomain: "pos-restaurant-30dcc.firebaseapp.com",
    projectId: "pos-restaurant-30dcc",
    storageBucket: "pos-restaurant-30dcc.appspot.com",
    messagingSenderId: "368280705300",
    appId: "1:368280705300:web:4f1fd373ef01cc182e8a01",
    measurementId: "G-WCEY5KN2D7",
};

export const app = initializeApp(firebaseConfig, "Pet-App");

export const authentication = getAuth(app);
