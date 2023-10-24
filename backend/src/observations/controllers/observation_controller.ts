import { Router } from 'express'
import ObservationsService from '../services/observations_service'
import { Response } from '../../../libs/response'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import { getByIdSchema, getByLogActionSchema } from '../../collect_center/models/location_model'
import { CreateObservationSchema, UpdateObservationSchema } from '../models/observations_model'

const router = Router()
const observationsService = new ObservationsService()
const response = new Response()

/**
 * @swagger
 *  /observations:
 *    get:
 *      summary: Get all observations registered
 *      tags: [Observations]
 *      responses:
 *        200:
 *          description: List of observations
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
 *                      $ref: '#/components/schemas/Observation'
*/
router.get(
  '/',
  checkTokenAndRoles(['ADMIN']),
  async (_req, res, next) => {
    try {
      const observations = await observationsService.getAll()
      response.success(res, observations)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /observations/{id}:
 *    get:
 *      summary: Get a observation by id
 *      tags: [Observations]
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the observation
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The observation description by id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/Observation'
 *        404:
 *          description: The location was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/:id',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const observation = await observationsService.getOne(Number(id))
      response.success(res, observation)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /observations/log-action-collaborator/{logActionCollaboratorId}:
 *    get:
 *      summary: Get all observation that belongs to a log action collaborator
 *      tags: [Observations]
 *      parameters:
 *          - name: logActionCollaboratorId
 *            in: path
 *            description: The id of the observation
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The observation description by id
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
 *                      $ref: '#/components/schemas/Observation'
 *        404:
 *          description: The location was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/log-action-collaborator/:logActionCollaboratorId',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByLogActionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { logActionCollaboratorId } = req.params
      const observations = await observationsService.getAllByLogActionCollaborator(Number(logActionCollaboratorId))
      response.success(res, observations)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /observations:
 *    post:
 *      summary: Create a new observation
 *      tags: [Observations]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateObservation'
 *      responses:
 *        201:
 *          description: The observation was created successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/Observation'
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
  validationHandler(CreateObservationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const observation = await observationsService.create(body)
      response.success(res, observation, 201)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /observations/{id}:
 *    patch:
 *      summary: Update a observation
 *      tags: [Observations]
 *      parameters:
 *        - id: integer
 *          in: path
 *          description: The id of the observation
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateObservation'
 *      responses:
 *        200:
 *          description: The observation was updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/Observation'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
 *        404:
 *          description: The observation was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.patch(
  '/:id',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  validationHandler(UpdateObservationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { body } = req
      const observation = await observationsService.update(Number(id), body)
      response.success(res, observation)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /observations/{id}:
 *    delete:
 *      summary: Delete a observation by id
 *      tags: [Observations]
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the observations
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The observation was deleted successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/Observation'
 *        404:
 *          description: The observation was not found
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
      const observation = await observationsService.remove(Number(id))
      response.success(res, observation)
    } catch (error) {
      next(error)
    }
  }
)

export default router
