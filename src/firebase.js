import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import { Users } from "./components/Header";

// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqeZ03OdLK1KsjbS0jopFRufp16Z8_OGA",
  authDomain: "disneyplus-clone-6d160.firebaseapp.com",
  projectId: "disneyplus-clone-6d160",
  storageBucket: "disneyplus-clone-6d160.appspot.com",
  messagingSenderId: "1094948327785",
  appId: "1:1094948327785:web:b06afede1b990ee7652df8",
  measurementId: "G-JG4J7SD1XS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
// const db = getDatabase();
const db = getFirestore(app);

const auth = getAuth(app);

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// export const Provider = provider;

// async function readASingDocument() {
//   const mySnapshot = await getDoc("movies");
//   if (mySnapshot.exists()) {
//     const docData = mySnapshot.data();
//     console.log(docData);
//   }
// }

// const movRef = collection(db, "movies");

// getDocs(movRef).then((snapshot) => {
//   console.log(snapshot);
// });

// const getDocument = async () => {
//   const ref = doc(db, "movies", "DhSJtiMS6yhnhVX6yOfP");
//   const snap = await getDoc(ref);

//   console.log(snap.data());
// };

// <button onClick={getDocument} kjwbvjewbkwvn></button>;

export { auth, provider };
export default db;

export { collection, doc, setDoc, getDocs, getDoc, query, where };
