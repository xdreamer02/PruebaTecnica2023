
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQwekqs38UTnRjWrRvRd9vRV1TyJqWpLk",
  authDomain: "tecnica-form.firebaseapp.com",
  projectId: "tecnica-form",
  storageBucket: "tecnica-form.appspot.com",
  messagingSenderId: "710283263069",
  appId: "1:710283263069:web:0d6095c031bf38761721b4",
  measurementId: "G-NL943DPBHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//bd init
const db = getFirestore();

//insert
export const saveTask = (title, description) => {
  addDoc(collection(db, 'tasks'), { title: title, description: description });

  console.log("Document written with ID: ", saveTask.id);
}

//listar datos
export const getAll = () => getDocs(collection(db, "tasks"));

//realtime
export const onGetTasks = () => console.log('snap');

export { onSnapshot, collection, db }

export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));