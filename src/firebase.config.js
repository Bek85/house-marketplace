import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBxr3DUC4HR-5UDZ9J8UenMMU2hAR6SiVA',
  authDomain: 'house-marketplace-f2540.firebaseapp.com',
  projectId: 'house-marketplace-f2540',
  storageBucket: 'house-marketplace-f2540.appspot.com',
  messagingSenderId: '233337062310',
  appId: '1:233337062310:web:5e57e0434817ef63700567',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
