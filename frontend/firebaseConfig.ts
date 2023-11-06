// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// import { getMessaging } from 'firebase/messaging'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_CONFIG_APP_ID
}

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
// export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// })
// export const FIREBASE_MESSAGING = getMessaging(FIREBASE_APP)
