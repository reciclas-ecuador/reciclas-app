import { Router } from 'express'
import { Response } from '../../../libs/response'
import LocationService from '../services/location_service'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import { createLocationSchema, getByIdSchema, updateLocationSchema } from '../models/location_model'

const router = Router()
const locationService = new LocationService()
const response = new Response()

router.get(
  '/',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  async (_req, res, next) => {
    try {
      const locations = await locationService.getAll()
      response.success(res, locations)
    } catch (error) {
      next(error)
    }
  })

router.get(
  '/:id',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const location = await locationService.getOne(Number(req.params.id))
      response.success(res, location)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(createLocationSchema, 'body'),
  async (req, res, next) => {
    try {
      const location = await locationService.create(req.body)
      response.success(res, location, 201)
    } catch (error) {
      next(error)
    }
  })

router.patch(
  '/:id',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByIdSchema, 'params'),
  validationHandler(updateLocationSchema, 'body'),
  async (req, res, next) => {
    try {
      const location = await locationService.update(Number(req.params.id), req.body)
      response.success(res, location)
    } catch (error) {
      next(error)
    }
  }
)

router.delete(
  '/:id',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const location = await locationService.remove(Number(req.params.id))
      response.success(res, location)
    } catch (error) {
      next(error)
    }
  }
)

export default router
