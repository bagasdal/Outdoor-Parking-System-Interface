import firebase from 'firebase';
require('firebase/auth');

var firebaseConfig = {
  apiKey: "AIzaSyBBVGil8DkEbtWdm1t8lh-s6y-I4Nb5O2g",
  authDomain: "smart-parking-guidance.firebaseapp.com",
  databaseURL: "https://smart-parking-guidance.firebaseio.com",
  projectId: "smart-parking-guidance",
  storageBucket: "smart-parking-guidance.appspot.com",
  messagingSenderId: "1015149467851",
  appId: "1:1015149467851:web:c9a29fd023517c1098e34e",
  measurementId: "G-YB88JTV3FK"
};

  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;