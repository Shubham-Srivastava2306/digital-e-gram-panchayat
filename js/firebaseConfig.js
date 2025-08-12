// /js/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7YNfSUH7JxTcIml7ex5mE9AGUG8pwIpE",
  authDomain: "digital-e-gram-panchayat-4533d.firebaseapp.com",
  projectId: "digital-e-gram-panchayat-4533d",
  storageBucket: "digital-e-gram-panchayat-4533d.firebasestorage.app",
  messagingSenderId: "815654739509",
  appId: "1:815654739509:web:187ed962ad73d376499b7c",
  measurementId: "G-GHCN7482K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
