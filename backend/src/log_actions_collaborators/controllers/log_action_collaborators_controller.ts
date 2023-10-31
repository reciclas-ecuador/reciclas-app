import { Router } from 'express'
import LogActionsCollaboratorsService from '../services/log_action_collaborators_service'
import { Response } from '../../../libs/response'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import { CreateLogActionCollaboratorSchema, UpdateLogActionCollaboratorSchema, getAttentionQualitySchema, getByIdSchema, getByUserSchema } from '../models/log_actions_collaborators_model'

const router = Router()
const logActionCollaboratorService = new LogActionsCollaboratorsService()
const response = new Response()

/**
 * @swagger
 *  /log-actions-collaborators:
 *    get:
 *      summary: Get all actions of collaborators. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Log Actions Collaborators]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: List of times that a collaborator delivered bottles
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/LogActionsCollaborators'
*/
router.get(
  '/',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  async (_, res, next) => {
    try {
      const logActionCollaborators = await logActionCollaboratorService.getAll()
      response.success(res, logActionCollaborators)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /log-actions-collaborators/{id}:
 *    get:
 *      summary: Get an specific action when a user delivered bottles by id. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Log Actions Collaborators]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the log action collaborator
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The log action description description by id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/LogActionsCollaborators'
 *        404:
 *          description: The log action collaborator was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/:id',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const logActionCollaborator = await logActionCollaboratorService.getOne(Number(req.params.id))
      response.success(res, logActionCollaborator)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /log-actions-collaborators/user/{email}:
 *    get:
 *      summary: Get all actions when a user delivered bottles by email. It is available for ADMIN, CENTER_EMPLOYEE and USERS users
 *      tags: [Log Actions Collaborators]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: email
 *            in: path
 *            description: The email of the user
 *            schema:
 *              type: string
 *              format: email
 *      responses:
 *        200:
 *          description: The log actions of the collaborators description by email
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/LogActionsCollaborators'
 *        404:
 *          description: The user was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/user/:email',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE', 'USER']),
  validationHandler(getByUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const logActionCollaborators = await logActionCollaboratorService.getAllByUser(email)
      response.success(res, logActionCollaborators)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /log-actions-collaborators:
 *    post:
 *      summary: Create a new Action when a user delivered bottles. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Log Actions Collaborators]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  $ref: '#/components/schemas/CreateLogActionsCollaborators'
 *                token:
 *                  type: string
 *                  exmaple: 'Firebase Cloud Messaging Token'
 *      responses:
 *        201:
 *          description: The log actions collaborators was created successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    type: object
 *                    properties:
 *                      data:
 *                        $ref: '#/components/schemas/LogActionsCollaborators'
 *                      token:
 *                        type: string
 *                        example: 'Firebase Cloud Messaging Token'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
*/
router.post(
  '/',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(CreateLogActionCollaboratorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { data, token } = req.body

      const logActionCollaborator = await logActionCollaboratorService.create(data, {
        title: 'Califica el servicio recibido',
        body: 'La calidad de tu atención es importante para nosotros, por favor califícala',
        redirectTo: 'attention-quality'
      }, token)
      response.success(res, logActionCollaborator, 201)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /log-actions-collaborators/{id}:
 *    patch:
 *      summary: Update a Log Action Collaborator. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Log Actions Collaborators]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - id: integer
 *          in: path
 *          description: The id of the log action collaborator
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateLogActionsCollaborators'
 *      responses:
 *        200:
 *          description: The log action collaborator was updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/LogActionsCollaborators'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
 *        404:
 *          description: The log action collaborator was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.patch(
  '/:id',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  validationHandler(UpdateLogActionCollaboratorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const logActionCollaborator = await logActionCollaboratorService.update(Number(id), req.body)
      response.success(res, logActionCollaborator)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /log-actions-collaborators/{id}/attention-quality:
 *    patch:
 *      summary: Assign a qualification to the attention received. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Log Actions Collaborators]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - id: integer
 *          in: path
 *          description: The id of the log action collaborator
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                attentionQuality:
 *                  type: integer
 *                  minimum: 1
 *                  maximum: 5
 *                  description: The qualification of the attention received
 *      responses:
 *        200:
 *          description: The attention quality was assigned successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/LogActionsCollaborators'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
 *        404:
 *          description: The log action collaborator was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.patch(
  '/:id/attention-quality',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  validationHandler(getAttentionQualitySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const logActionCollaborator = await logActionCollaboratorService.setAttentionQuality(
        Number(id),
        req.body.attentionQuality
      )
      response.success(res, logActionCollaborator)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /log-actions-collaborators/{id}:
 *    delete:
 *      summary: Delete a log actions collaborators by id. It is available just for ADMIN users
 *      tags: [Log Actions Collaborators]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the log actions collaborators
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The log actions collaborators was deleted successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/LogActionsCollaborators'
 *        404:
 *          description: The log actions collaborators was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.delete(
  '/:id',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const logActionCollaborator = await logActionCollaboratorService.remove(Number(id))
      response.success(res, logActionCollaborator)
    } catch (error) {
      next(error)
    }
  }
)

export default router
