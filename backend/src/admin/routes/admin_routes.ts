import { Router, type Express } from 'express'
import { admin_controllers } from '../controllers'

const router = Router()

const useRoutesAdmin = (app: Express): void => {
  app.use('/api/v1', router)

  router.use('/usersAdmin', admin_controllers)
  /* Add the general path and controller endpoints */
  /* Example: router.use('/admin', adminController) */
}

export default useRoutesAdmin
