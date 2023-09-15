import { Router } from 'express'
import CenterEmployeesService from '../services/center_employees_service'
import { Response } from '../../../libs/response'
import { validationHandler } from '../../../middlewares/validation_handler'
import { CreateCenterEmployeeSchema, UpdateCenterEmployeeSchema, getByEmailSchema } from '../models/center_employees_model'

const router = Router()
const centerEmployeeService = new CenterEmployeesService()
const response = new Response()
router.get(
  '/',
  async (_req, res, next) => {
    try {
      const centerEmployees = await centerEmployeeService.getAll()
      response.success(res, centerEmployees)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/:email',
  validationHandler(getByEmailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const centerEmployee = await centerEmployeeService.getOne(email)
      response.success(res, centerEmployee)
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/',
  validationHandler(CreateCenterEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const centerEmployee = await centerEmployeeService.create(req.body)
      response.success(res, centerEmployee, 201)
    } catch (error) {
      next(error)
    }
  }
)

router.patch(
  '/:email',
  validationHandler(getByEmailSchema, 'params'),
  validationHandler(UpdateCenterEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const centerEmployee = await centerEmployeeService.update(email, req.body)
      response.success(res, centerEmployee)
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
      const centerEmployee = await centerEmployeeService.remove(email)
      response.success(res, centerEmployee)
    } catch (error) {
      next(error)
    }
  }
)

export default router
