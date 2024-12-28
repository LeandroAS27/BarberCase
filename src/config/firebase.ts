import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3XEVWg0RLhVnWDmSt7AaKrWKPh5TLiRQ",
    authDomain: "barbercase-43e4a.firebaseapp.com",
    projectId: "barbercase-43e4a",
    storageBucket: "barbercase-43e4a.firebasestorage.app",
    messagingSenderId: "664655578249",
    appId: "1:664655578249:web:6a779bdc787359a230f258",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);