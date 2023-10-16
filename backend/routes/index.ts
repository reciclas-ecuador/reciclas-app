import { Router, type Express } from 'express'
import { collectCenterController, locationController } from '../src/collect_center/controllers'
import { adminController } from '../src/admin/controllers'
import { usersController } from '../src/collaborators/controllers'
import { logActionCollaboratorsController } from '../src/log_actions_collaborators/controllers'
import { observationsController } from '../src/observations/controllers'
import { centerEmployeesController } from '../src/center_employees/controllers'
import { authController } from '../src/auth/controllers'

const router = Router()

// Add the necessary endpoints
const useRoutes = (app: Express): void => {
  app.use('/api/v1', router)

  router.use('/admin', adminController)
  router.use('/auth', authController)
  router.use('/users', usersController)
  router.use('/center-employees', centerEmployeesController)
  router.use('/locations', locationController)
  router.use('/collect-centers', collectCenterController)
  router.use('/log-actions-collaborators', logActionCollaboratorsController)
  router.use('/observations', observationsController)
}

export default useRoutes
