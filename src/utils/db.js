const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyCcI3rfzk60iWCUuE0owksdweZ6pTy99Dg",
  authDomain: "razzle-4c936.firebaseapp.com",
  databaseURL: "https://razzle-4c936.firebaseio.com",
  projectId: "razzle-4c936",
  storageBucket: "razzle-4c936.appspot.com",
  messagingSenderId: "789144515883"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

export { db };