import { Router } from 'express'
import { validationHandler } from '../middlewares/validation.handler'
import { CollaboratorsService } from '../services/collaborators.service'
import { createCollaboratorSchema, getByIdSchema, updateCollaboratorSchema } from '../models/collaborator.model'
import { Response } from '../libs/response'

const router = Router()
const response = new Response()
const collaboratorsService = new CollaboratorsService()

router.get('/', async (_req, res, next) => {
  try {
    const collaborators = await collaboratorsService.getAll()

    response.success(res, collaborators)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', validationHandler(getByIdSchema, 'params'), async (req, res, next) => {
  try {
    const collaborator = await collaboratorsService.getOne(Number(req.params.id))

    response.success(res, collaborator)
  } catch (error) {
    next(error)
  }
})

router.post('/', validationHandler(createCollaboratorSchema, 'body'), async (req, res, next) => {
  try {
    const collaborator = await collaboratorsService.create(req.body)

    response.success(res, collaborator, 201)
  } catch (error) {
    next(error)
  }
})

router.put(
  '/:id',
  validationHandler(getByIdSchema, 'params'),
  validationHandler(updateCollaboratorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { body } = req
      const collaborator = await collaboratorsService.update(Number(id), body)

      response.success(res, collaborator)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', validationHandler(getByIdSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params
    const collaborator = await collaboratorsService.remove(Number(id))

    response.success(res, collaborator)
  } catch (error) {
    next(error)
  }
})

export default router
