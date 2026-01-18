// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAkYcO4jjPB7Gk6IraSBs_qB-dgfQe__uw",
  authDomain: "secondbrain-b5493.firebaseapp.com",
  projectId: "secondbrain-b5493",
  storageBucket: "secondbrain-b5493.firebasestorage.app",
  messagingSenderId: "550305320154",
  appId: "1:550305320154:web:f5b24951fc25df507329e3",
  measurementId: "G-T032NJR2ZW"
};

const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Analytics (browser-only)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
