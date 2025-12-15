import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBWASLizGR-1nvc9l5mwG_yE9KRUtAcuEA",
    authDomain: "colegio-web-fa97a.firebaseapp.com",
    projectId: "colegio-web-fa97a",
    storageBucket: "colegio-web-fa97a.firebasestorage.app",
    messagingSenderId: "1045279261194",
    appId: "1:1045279261194:web:fc7b2c80861935b24955f3",
    measurementId: "G-3HPWRH5E9W"
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
