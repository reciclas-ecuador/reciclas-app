import { Router } from 'express'
import CollectCenterService from '../services/collect_center_service'
import { Response } from '../../../libs/response'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import {
  createCollectCenter,
  getByIdSchema,
  getByLocationIdSchema,
  setCollectCenterManagerSchema,
  updateCollectCenter,
  updateHashSchema
} from '../models/collect_center_model'

const router = Router()
const collectCenterService = new CollectCenterService()
const response = new Response()

/**
 * @swagger
 *  /collect-centers:
 *    get:
 *      summary: Get all collect centers registered. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: List of collect centers registered
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
 *                      $ref: '#/components/schemas/CollectCenter'
*/
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

/**
 *  @swagger
 *  /collect-centers/location/{locationId}:
 *    get:
 *      summary: Get all collect centers in a location. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: locationId
 *            in: path
 *            description: The id of the location to find the collect centers
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The collect center description by id
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
 *                      $ref: '#/components/schemas/CollectCenter'
 *        404:
 *          description: The collect center was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/location/:locationId',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByLocationIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const collectCenters = await collectCenterService.getAllByLocation(Number(req.params.locationId))
      response.success(res, collectCenters)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /collect-centers/{id}:
 *    get:
 *      summary: Get a collect center description by id. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the collect center
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The collect center description by id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CollectCenter'
 *        404:
 *          description: The collect center was not found
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
      const collectCenter = await collectCenterService.getOne(Number(req.params.id))
      response.success(res, collectCenter)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /collect-centers/{id}/employees:
 *    get:
 *      summary: Get all employees assigned to a collect center. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the collect center
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The collect center description by id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CollectCenterWithEmployees'
 *        404:
 *          description: The collect center was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/:id/employees',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const collectCenter = await collectCenterService.getAllEmployees(Number(req.params.id))
      response.success(res, collectCenter)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /collect-centers/{id}/total-today-recolected:
 *    get:
 *      summary: Get total recolected by a collect center on the current day. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the collect center
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The collect center description by id
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
 *                      collectCenter:
 *                        $ref: '#/components/schemas/CollectCenter'
 *                      total:
 *                        type: integer
 *                        example: 100
 *        404:
 *          description: The collect center was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/:id/total-today-recolected',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { collectCenter, total } = await collectCenterService.getTotalRecolectedByIdDiary(Number(id))
      response.success(res, { collectCenter, total })
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /collect-centers:
 *    post:
 *      summary: Create a new collect center. It is available just for ADMIN users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateCollectCenter'
 *      responses:
 *        201:
 *          description: The collect center was created successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CollectCenter'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
*/
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

/**
 *  @swagger
 *  /collect-centers/{id}/manager:
 *    patch:
 *      summary: Assign a manager to a collect center. It is available just for ADMIN users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - id: integer
 *          in: path
 *          description: The id of the collect center
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                managerEmail:
 *                  type: string
 *                  format: email
 *                  description: The email of the manager to be assigned
 *      responses:
 *        200:
 *          description: The manager was assigned successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CollectCenter'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
 *        404:
 *          description: The manager or collect center was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.patch(
  '/:id/manager',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByIdSchema, 'params'),
  validationHandler(setCollectCenterManagerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { managerEmail } = req.body
      const collectCenter = await collectCenterService.setManager(Number(id), managerEmail)
      response.success(res, collectCenter)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /collect-centers/{id}:
 *    patch:
 *      summary: Update a collect center. It is available just for ADMIN users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - id: integer
 *          in: path
 *          description: The id of the collect center
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateCollectCenter'
 *      responses:
 *        200:
 *          description: The collect center was updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CollectCenter'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
 *        404:
 *          description: The user was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
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

/**
 *  @swagger
 *  /collect-centers/{id}/update-hash:
 *    patch:
 *      summary: Assign a new hash to a collect center. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - id: integer
 *          in: path
 *          description: The id of the collect center
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                update-hash:
 *                  type: string
 *                  description: The new hash to be assigned
 *      responses:
 *        200:
 *          description: The new hash was assigned successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CollectCenter'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
 *        404:
 *          description: The manager or collect center was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.patch(
  '/:id/update-hash',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByIdSchema, 'params'),
  validationHandler(updateHashSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { hash } = req.body
      const collectCenter = await collectCenterService.updateHash(Number(id), hash)
      response.success(res, collectCenter)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /collect-centers/{id}:
 *    delete:
 *      summary: Delete a collect center by id. It is available just for ADMIN users
 *      tags: [Collect Centers]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the collect center
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The collect center deleted successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CollectCenter'
 *        404:
 *          description: The collect center was not found
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
      const collectCenter = await collectCenterService.remove(Number(id))
      response.success(res, collectCenter)
    } catch (error) {
      next(error)
    }
  }
)

export default router
