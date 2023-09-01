import { Router, type Express } from 'express'
import collaboratorsController from '../controllers/collaborators_controller'

const router = Router()

const useCollaboratorsRoutes = (app: Express): void => {
  app.use('/api/v1', router)

  router.use('/collaborators', collaboratorsController)
  /* Add the general path and controller endpoints */
  /* Example: router.use('/admin', adminController) */
}

export default useCollaboratorsRoutes
