import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export const signInwithEmail = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCrendential) => {
      console.log(userCrendential)
    })
    .catch((error) => {
      console.log(error)
    })
}
