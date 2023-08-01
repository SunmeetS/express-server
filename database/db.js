import { initializeApp } from "firebase/app";
import { getDatabase, ref, serverTimestamp, set } from "firebase/database";
import { getStandupLinks } from "../seleniumTest.js";
import { doc, getFirestore, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCkEDVc2duciPC0IIYZJQwpJ1oAaVONfw8",
  authDomain: "random-standup.firebaseapp.com",
  projectId: "random-standup",
  storageBucket: "random-standup.appspot.com",
  messagingSenderId: "396920044027",
  appId: "1:396920044027:web:e28d098127d0c8622d335e",
  measurementId: "G-QKTDQ3GLD5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function updateStandupComedy() {
  let standupLinksBatch = await getStandupLinks()
  let date = new Date()

  await setDoc(doc(db, "standupLinks", date.getTime().toString()), {[date.getTime().toString()]: standupLinksBatch}).catch((err) => console.log(err));;
}
updateStandupComedy()