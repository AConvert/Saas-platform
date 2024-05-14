import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMu9rGR1u1Se89EOGpINzez-As3co2NNg",
  authDomain: "saas-platform-bed40.firebaseapp.com",
  projectId: "saas-platform-bed40",
  storageBucket: "saas-platform-bed40.appspot.com",
  messagingSenderId: "285555071357",
  appId: "1:285555071357:web:17e447d645aec283b81414",
  measurementId: "G-C5M6B6HJNM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// const analytics = getAnalytics(app);

export { db}