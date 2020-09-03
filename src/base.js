import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_2uhSMr3NjQunSjPj9hY2Mk27L5ZSVig",
  authDomain: "jeopardy-76501.firebaseapp.com",
  databaseURL: "https://jeopardy-76501.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;