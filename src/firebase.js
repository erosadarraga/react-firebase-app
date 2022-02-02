// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChU2O8VBTRfJRJATWskLzm2FueqxY5t98',
  authDomain: 'react-fb-auth-a0916.firebaseapp.com',
  projectId: 'react-fb-auth-a0916',
  storageBucket: 'react-fb-auth-a0916.appspot.com',
  messagingSenderId: '679738361699',
  appId: '1:679738361699:web:68f1523c72645feb807556',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
