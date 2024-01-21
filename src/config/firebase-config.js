import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDPF2RippRncyOnvi43xgQUHs6UaNWwxec",
  authDomain: "foruse-8e6be.firebaseapp.com",
  projectId: "foruse-8e6be",
  storageBucket: "foruse-8e6be.appspot.com",
  messagingSenderId: "972281659210",
  appId: "1:972281659210:web:4d2ab8a7b0ee7cff18cbb3",
  measurementId: "G-WHPV0KZVJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
