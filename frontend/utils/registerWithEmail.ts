import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from '../config/firebase'
import { Alert } from 'react-native'
// import { Alert } from 'react-native'

export const registerWithEmail = async (email: string, password: string, name: string) => {
  const actionCodeSettings = {
    url: `https://reciclasapp-cb438.firebaseapp.com/?email=${email}`,
    iOS: {
      bundleId: 'reciclas.app'
    },
    android: {
      packageName: 'frontend',
      installApp: true,
      minimumVersion: '12'
    },
    handleCodeInApp: true
  }
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await sendEmailVerification(user)
  } catch (error: any) {
    Alert.alert('error al iniciar sesión', error.message)
  }
}
