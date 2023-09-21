import { Router } from 'express'
import CollectCenterService from '../services/collect_center_service'
import { Response } from '../../../libs/response'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import { createCollectCenter, getByIdSchema, updateCollectCenter } from '../models/collect_center_model'

const router = Router()
const collectCenterService = new CollectCenterService()
const response = new Response()

router.get(
  '/',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  async (_, res, next) => {
    try {
      const collectCenters = await collectCenterService.getAll()
      response.success(res, collectCenters)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/:id',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const collectCenter = await collectCenterService.getOne(Number(req.params.id))
      response.success(res, collectCenter)
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(createCollectCenter, 'body'),
  async (req, res, next) => {
    try {
      const collectCenter = await collectCenterService.create(req.body)
      response.success(res, collectCenter, 201)
    } catch (error) {
      next(error)
    }
  }
)

router.patch(
  '/:id',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByIdSchema, 'params'),
  validationHandler(updateCollectCenter, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const collectCenter = await collectCenterService.update(Number(id), req.body)
      response.success(res, collectCenter)
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
      const { id } = req.params
      const collectCenter = await collectCenterService.remove(Number(id))
      response.success(res, collectCenter)
    } catch (error) {
      next(error)
    }
  }
)

export default router
