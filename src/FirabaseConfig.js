import firebase from "firebase";

const Config = firebase.initializeApp({
  apiKey: "AIzaSyBPkd0w5kixhY3LdscPP8WYYpp08nleAkc",
  authDomain: "apartment-hunt-main.firebaseapp.com",
  databaseURL: "https://apartment-hunt-main.firebaseio.com",
  projectId: "apartment-hunt-main",
  storageBucket: "apartment-hunt-main.appspot.com",
  messagingSenderId: "786113437115",
  appId: "1:786113437115:web:629a2ab3ba36921890789e",
  measurementId: "G-W82RQQD4SW",
});

export const auth = firebase.auth();
export const storage = firebase.storage();

export default Config;
