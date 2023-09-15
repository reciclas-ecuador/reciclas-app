import { Router } from 'express'
import { validationHandler } from '../../../middlewares/validation_handler'
import { createUserSchema, getByEmailSchema, updateUserSchema } from '../models/users_model'
import { Response } from '../../../libs/response'
import UsersService from '../services/users_service'

const router = Router()
const response = new Response()
const usersService = new UsersService()

router.get('/', async (_req, res, next) => {
  try {
    const users = await usersService.getAll()

    response.success(res, users)
  } catch (error) {
    next(error)
  }
})

router.get('/:email', validationHandler(getByEmailSchema, 'params'), async (req, res, next) => {
  try {
    const users = await usersService.getOne(req.params.email)

    response.success(res, users)
  } catch (error) {
    next(error)
  }
})

router.get('/:email/ecoequivalences', validationHandler(getByEmailSchema, 'params'), async (req, res, next) => {
  try {
    const total = await usersService.getEcoEquivalences(req.params.email)

    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

router.post('/', validationHandler(createUserSchema, 'body'), async (req, res, next) => {
  try {
    const users = await usersService.create(req.body)

    response.success(res, users, 201)
  } catch (error) {
    next(error)
  }
})

router.patch(
  '/:email',
  validationHandler(getByEmailSchema, 'params'),
  validationHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const { body } = req
      const users = await usersService.update(email, body)

      response.success(res, users)
    } catch (error) {
      next(error)
    }
  }
)

router.delete(
  '/:email',
  validationHandler(getByEmailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const users = await usersService.remove(email)

      response.success(res, users)
    } catch (error) {
      next(error)
    }
  })

export default router
