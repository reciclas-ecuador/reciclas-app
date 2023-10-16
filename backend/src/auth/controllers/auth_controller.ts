import { Router } from 'express'
import CollectCenterService from '../../collect_center/services/collect_center_service'
import { validationHandler } from '../../../middlewares/validation_handler'
import { hashSchema, registerCenterEmployeeSchema, registerUserSchema } from '../models/auth_model'
import AuthService from '../services/auth_service'

const collectCenterService = new CollectCenterService()
const authService = new AuthService()
const router = Router()

router.post(
  '/register-user',
  validationHandler(registerUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const user = await authService.createUser(body)
      res.json(user)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/register-employee',
  validationHandler(registerCenterEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const user = await authService.createEmployee(body)
      res.json(user)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/validate-hash',
  validationHandler(hashSchema, 'body'),
  async (req, res, next) => {
    try {
      const { hash } = req.body
      const collectCenter = await collectCenterService.verifyHash(hash)
      res.json(collectCenter)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/login',
  // validationHandler(loginSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idToken } = req.body
      const user = await authService.verifyIdToken(idToken)
      res.json({ role: user.role })
    } catch (error) {
      next(error)
    }
  })

export default router
