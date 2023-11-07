// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC0gCsBZMsVJJcB0Ad2tRSnZKbuu2Ca0Jw',
  authDomain: 'reciclasapp-cb438.firebaseapp.com',
  projectId: 'reciclasapp-cb438',
  storageBucket: 'reciclasapp-cb438.appspot.com',
  messagingSenderId: '67558533785',
  appId: '1:67558533785:web:d0ab399027d29284536608'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
