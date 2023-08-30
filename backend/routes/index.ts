import { Router, type Express } from 'express'
import usersController from '../controllers/users.controller'
import collaboratorsController from '../controllers/collaborators.controller'

const router = Router()

const useRoutes = (app: Express): void => {
  app.use('/api/v1', router)

  router.use('/users', usersController)
  router.use('/collaborators', collaboratorsController)
  /* Add the general path and controller endpoints */
  /* Example: router.use('/admin', adminController) */
}

export default useRoutes
