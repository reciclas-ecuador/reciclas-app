import { Router } from 'express'
import { AdminService } from '../services/admin_service'
import { Response } from '../../../libs/response'
import { checkTokenAndRoles } from '../../../middlewares/validation_handler'

const router = Router()
const adminService = new AdminService()
const response = new Response()

/** Add the necessary endpoints */
router.use(checkTokenAndRoles(['ADMIN']))

router.get('/total-recolected', async (_req, res, next) => {
  try {
    const total = await adminService.getTotalRecolected()
    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

router.get('/summary-stadistics', async (_req, res, next) => {
  try {
    const total = await adminService.getSummaryStadistics()
    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

router.get('/users-info', async (req, res, next) => {
  try {
    const total = await adminService.getUsersInfo()
    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

router.get('/total-employees', async (req, res, next) => {
  try {
    const total = await adminService.getTotalEmployees()
    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

router.get('/average-attention-quality', async (req, res, next) => {
  try {
    const total = await adminService.getAverageAttentionQuality()
    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

router.get('/total-ecoequivalences', async (req, res, next) => {
  try {
    const total = await adminService.getTotalEcoEquivalences()
    console.log('[total-ecoequivalences]', total)
    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

export default router
