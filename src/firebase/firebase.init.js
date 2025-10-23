// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDy_mAQS0w9Oh5T26yn8UkHBC5TxQ0m674',
  authDomain: 'warmpaws-pet-care-ac8bc.firebaseapp.com',
  projectId: 'warmpaws-pet-care-ac8bc',
  storageBucket: 'warmpaws-pet-care-ac8bc.firebasestorage.app',
  messagingSenderId: '898598221257',
  appId: '1:898598221257:web:bb5c10a6d689855fe8a418',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
