import { Router } from 'express'
import { Response } from '../../../libs/response'
import LocationService from '../services/location_service'
import { validationHandler } from '../../../middlewares/validation_handler'
import { createLocationSchema, getByIdSchema, updateLocationSchema } from '../models/location_model'

const router = Router()
const locationService = new LocationService()
const response = new Response()

router.get(
  '/',
  async (req, res, next) => {
    try {
      const locations = await locationService.getAll()
      response.success(res, locations)
    } catch (error) {
      next(error)
    }
  })

router.get(
  '/:id',
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
