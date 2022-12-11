import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATJa1kiPTikEyWljmPW9FGnibwQu5pv1A",
  authDomain: "elite-coder.firebaseapp.com",
  projectId: "elite-coder",
  storageBucket: "elite-coder.appspot.com",
  messagingSenderId: "884423966603",
  appId: "1:884423966603:web:655f32d693f27a5401398e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export { auth, db, google, facebook };