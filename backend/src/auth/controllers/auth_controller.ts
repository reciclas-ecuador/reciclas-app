import { Router } from 'express'
import { firebaseAuthService } from '../firebase_auth_service'

const router = Router()

router.post('/register', async (req, res, next) => {
  try {
    const { email, password, role } = req.body
    const user = await firebaseAuthService.createUser({ email, password, role })
    res.json(user)
  } catch (error) {
    next(error)
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const { idToken } = req.body
    const user = await firebaseAuthService.verifyIdToken(idToken)
    res.json({ role: user.role })
  } catch (error) {
    next(error)
  }
})

export default router
