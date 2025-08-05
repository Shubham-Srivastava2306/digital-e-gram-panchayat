// auth.js
import { auth, db } from './firebase.js';
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const errorMsg = document.getElementById("error-msg");

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    const docSnap = await getDoc(doc(db, "users", uid));
    if (!docSnap.exists()) {
      errorMsg.innerText = "User profile not found.";
      return;
    }

    const data = docSnap.data();
    if (data.role !== role) {
      errorMsg.innerText = "Wrong role selected.";
      return;
    }

    // Redirect based on role
    if (role === "user") window.location.href = "dashboard/user.html";
    if (role === "staff") window.location.href = "dashboard/staff.html";
    if (role === "officer") window.location.href = "dashboard/officer.html";

  } catch (error) {
    errorMsg.innerText = "Login failed: " + error.message;
  }
};
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.register = async function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const aadhaar = document.getElementById("aadhaar").value.trim();
  const address = document.getElementById("address").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (!name || !email || !password || !aadhaar || !address) {
    errorMsg.innerText = "All fields are required.";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "users", uid), {
      name,
      email,
      aadhaar,
      address,
      role: "user", // Static role for now
      createdAt: new Date().toISOString()
    });

    window.location.href = "dashboard/user.html";

  } catch (error) {
    errorMsg.innerText = "Registration failed: " + error.message;
  }
};
