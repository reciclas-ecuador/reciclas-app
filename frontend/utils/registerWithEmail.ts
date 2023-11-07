import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { Alert } from 'react-native'

export const registerWithEmail = (email: string, password: string, name: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => console.log('registrado'))
    .catch((err) => Alert.alert('login error', err.message))
}
