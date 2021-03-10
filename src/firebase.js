import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBCnK4NVBpkrafJ8F6VQAfkpI9kgTOsHzc",
  authDomain: "to-do-list-5351e.firebaseapp.com",
  projectId: "to-do-list-5351e",
  storageBucket: "to-do-list-5351e.appspot.com",
  messagingSenderId: "332247631210",
  appId: "1:332247631210:web:7a01693592c4160fd19113",
  measurementId: "G-486LSYM4EK"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);