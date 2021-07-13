import firebase from "firebase";

const firebaseConfig = {
  //your fire base api key
  apiKey: "AIzaSyCL26a3eiUPfFBp-cyqVF1SFkIBnviB8Ws",
  authDomain: "stockpe-c32c4.firebaseapp.com",
  projectId: "stockpe-c32c4",
  storageBucket: "stockpe-c32c4.appspot.com",
  messagingSenderId: "961216355861",
  appId: "1:961216355861:web:eac45ae99403a640b6b81c",
  measurementId: "G-XBM1SBV2MV",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
