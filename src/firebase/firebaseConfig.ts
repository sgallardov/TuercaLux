import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCd0vvsQZl5fj0ZZVtfJk9pKeSnwjF7aaU",
  authDomain: "tuercalux.firebaseapp.com",
  projectId: "tuercalux",
  storageBucket: "tuercalux.appspot.com",
  messagingSenderId: "935372919212",
  appId: "1:935372919212:web:e42f5f31004cbaaae26a09",
  measurementId: "G-KHB489SLX7"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase App Initialized:", app);  // Este log te ayudará a verificar que Firebase está inicializado

// Inicializa servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
