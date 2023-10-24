// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDH3WmKzppPnyXfyMjzyad4LjEss58NOQs',
  authDomain: 'reciclas-app-f0286.firebaseapp.com',
  projectId: 'reciclas-app-f0286',
  storageBucket: 'reciclas-app-f0286.appspot.com',
  messagingSenderId: '979849589331',
  appId: '1:979849589331:web:c18d965a3bfada1fa2cca6'
}

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
