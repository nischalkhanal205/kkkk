import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDu3D5GJxh-y7Tbs8zplELtGx7ewkftCgI",
  authDomain: "drivers-firebase.firebaseapp.com",
  projectId: "drivers-firebase",
  storageBucket: "drivers-firebase.appspot.com",
  messagingSenderId: "495500472161",
  appId: "1:495500472161:web:f5f47696a6e211c7e79f20"
  }

firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const auth = firebase.auth();

export {db, auth};