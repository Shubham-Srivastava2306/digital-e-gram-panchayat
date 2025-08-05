
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDNUv6B6DGax9UF4eJ8jp2gNMWiCyS0JmY",
    authDomain: "digital-e-gram-panchayat-9a7bd.firebaseapp.com",
    projectId: "digital-e-gram-panchayat-9a7bd",
    storageBucket: "digital-e-gram-panchayat-9a7bd.firebasestorage.app",
    messagingSenderId: "610770168122",
    appId: "1:610770168122:web:a4e25b80a3e352add38803",
    measurementId: "G-R8TK9MEBBF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);