import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCspPqP1Uz1aFWQYaBWFNKXlo0enhXhbdo",
  authDomain: "soop-cbb03.firebaseapp.com",
  databaseURL: "https://soop-cbb03-default-rtdb.firebaseio.com",
  projectId: "soop-cbb03",
  storageBucket: "soop-cbb03.appspot.com",
  messagingSenderId: "463838785388",
  appId: "1:463838785388:web:3fa866c927c01ab86dcd49",
  measurementId: "G-BMRHCXZZVR",
});

const oDB = firebaseConfig.database();
export const productDB = oDB.ref("products");
export const cartDB = oDB.ref("carts");
export const communityDB = oDB.ref("communitys");
export const memberDB = oDB.ref("members");
export const rankingDB = oDB.ref("rankings");

export const oStorage = firebaseConfig.storage();
