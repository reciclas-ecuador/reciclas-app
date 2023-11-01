import { Router } from 'express'
import { Response } from '../../../libs/response'
import LocationService from '../services/location_service'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import { createLocationSchema, getByIdSchema, updateLocationSchema } from '../models/location_model'

const router = Router()
const locationService = new LocationService()
const response = new Response()

/**
 * @swagger
 *  /locations:
 *    get:
 *      summary: Get all locations registered. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Locations]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: List of locations
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
 *                      $ref: '#/components/schemas/Location'
*/
router.get(
  '/',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  async (_req, res, next) => {
    try {
      const locations = await locationService.getAll()
      response.success(res, locations)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /locations/{id}:
 *    get:
 *      summary: Get a location by id. It is available for ADMIN and CENTER_EMPLOYEE users
 *      tags: [Locations]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the location
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The description description by id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/Location'
 *        404:
 *          description: The location was not found
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
      const location = await locationService.getOne(Number(req.params.id))
      response.success(res, location)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /locations:
 *    post:
 *      summary: Create a new location. It is available just for ADMIN users
 *      tags: [Locations]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateLocation'
 *      responses:
 *        201:
 *          description: The location was created successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/Location'
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
  validationHandler(createLocationSchema, 'body'),
  async (req, res, next) => {
    try {
      const location = await locationService.create(req.body)
      response.success(res, location, 201)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /locations/{id}:
 *    patch:
 *      summary: Update a location. It is available just for ADMIN users
 *      tags: [Locations]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - id: integer
 *          in: path
 *          description: The id of the location
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateLocation'
 *      responses:
 *        200:
 *          description: The location was updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/Location'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
 *        404:
 *          description: The location was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.patch(
  '/:id',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByIdSchema, 'params'),
  validationHandler(updateLocationSchema, 'body'),
  async (req, res, next) => {
    try {
      const location = await locationService.update(Number(req.params.id), req.body)
      response.success(res, location)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /locations/{id}:
 *    delete:
 *      summary: Delete a location by id. It is available just for ADMIN users
 *      tags: [Locations]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the location
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: The location was deleted successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/Location'
 *        404:
 *          description: The location was not found
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
      const location = await locationService.remove(Number(req.params.id))
      response.success(res, location)
    } catch (error) {
      next(error)
    }
  }
)

export default router
