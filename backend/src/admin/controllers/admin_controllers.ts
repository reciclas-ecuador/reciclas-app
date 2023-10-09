import { Router } from 'express'
import { AdminService } from '../services/admin_service'
import { Response } from '../../../libs/response'

const router = Router()
const adminService = new AdminService()
const response = new Response()

router.get('/admintest', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

/** Add the necessary endpoints */

router.get('/total-recolected', async (req, res, next) => {
  try {
    const total = await adminService.getTotalRecolected()
    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

router.get('/total-users', async (req, res, next) => {
  try {
    const total = await adminService.getTotalUsers()
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
    response.success(res, total)
  } catch (error) {
    next(error)
  }
})

export default router
