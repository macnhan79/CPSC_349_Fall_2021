// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
  'use strict';
     var App = window.App || {};

  var FirebaseConfig = {
    apiKey: "AIzaSyDtLPDV59uhpILxTuqak6N4lZrSps9Igc8",
    authDomain: "coffeerun-49a5a.firebaseapp.com",
    projectId: "coffeerun-49a5a",
    storageBucket: "coffeerun-49a5a.appspot.com",
    messagingSenderId: "1072178109453",
    appId: "1:1072178109453:web:fa82ea393d1f1c74154944",
    measurementId: "G-BKR8QLLDEG"
  };
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;

})(window);