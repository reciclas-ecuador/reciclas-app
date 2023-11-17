import boom from '@hapi/boom'
import { Router } from 'express'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import { createUserSchema, getByEmailSchema, updateUserSchema } from '../models/users_model'
import { Response } from '../../../libs/response'
import UsersService from '../services/users_service'

const router = Router()
const response = new Response()
const usersService = new UsersService()

/**
 * @swagger
 *  /users:
 *    get:
 *      summary: Get all registered users
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: List of users
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
 *                      $ref: '#/components/schemas/User'
 */
router.get(
  '/',
  checkTokenAndRoles(['ADMIN']),
  async (_req, res, next) => {
    try {
      const users = await usersService.getAll()

      response.success(res, users)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /users/{email}:
 *    get:
 *      summary: Get a user by email
 *      tags: [Users]
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
 *          description: The user description by email
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/User'
 *        404:
 *          description: The user was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/:email',
  checkTokenAndRoles(['ADMIN', 'USER']),
  validationHandler(getByEmailSchema, 'params'),
  async (req, res, next) => {
    try {
      if (req.user?.role === 'ADMIN') {
        const users = await usersService.getOne(req.params.email)
        response.success(res, users)
      }

      if (req.user?.role === 'USER') {
        if (req.params.email !== req.user.user?.email) {
          throw boom.unauthorized('You are not authorized to access this resource')
        }

        const users = await usersService.getOne(req.params.email)
        response.success(res, users)
      }
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /users/{email}/ecoequivalences:
 *    get:
 *      summary: Get a user ecoequivalences by email
 *      tags: [Users]
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
 *          description: The user ecoequivalences
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/UserEcoEquivalences'
 *        404:
 *          description: The user was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
 */
router.get(
  '/:email/ecoequivalences',
  checkTokenAndRoles(['ADMIN', 'USER']),
  validationHandler(getByEmailSchema, 'params'),
  async (req, res, next) => {
    try {
      const total = await usersService.getEcoEquivalences(req.params.email)

      response.success(res, total)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /users/ci/{ci}:
 *    get:
 *      summary: Get a user by the ci
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: ci
 *            in: path
 *            description: The identification card of the user
 *            schema:
 *              type: string
 *      responses:
 *        200:
 *          description: The user description by ci
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/User'
 *        404:
 *          description: The user was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/ci/:ci',
  checkTokenAndRoles(['ADMIN']),
  async (req, res, next) => {
    try {
      const user = await usersService.getOneByCi(req.params.ci)
      response.success(res, user)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /users/id/{id}:
 *    get:
 *      summary: Get a user by the id
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            description: The id of the user
 *            schema:
 *              type: string
 *      responses:
 *        200:
 *          description: The user description by id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/User'
 *        404:
 *          description: The user was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/id/:id',
  checkTokenAndRoles(['ADMIN']),
  async (req, res, next) => {
    try {
      const user = await usersService.getOneByCi(req.params.id)
      response.success(res, user)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /users:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUser'
 *      responses:
 *        201:
 *          description: The user was created successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/User'
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
  validationHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const users = await usersService.create(req.body)

      response.success(res, users, 201)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /users/{email}:
 *    patch:
 *      summary: Update a user
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: email
 *          in: path
 *          description: The email of the user
 *          schema:
 *            type: string
 *            format: email
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateUser'
 *      responses:
 *        200:
 *          description: The user was updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/User'
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
  '/:email',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByEmailSchema, 'params'),
  validationHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const { body } = req
      const users = await usersService.update(email, body)

      response.success(res, users)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /users/{email}/remove:
 *    patch:
 *      summary: Change the status of a user to removed (inactive)
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: email
 *          in: path
 *          description: The email of the user
 *          schema:
 *            type: string
 *            format: email
 *      responses:
 *        200:
 *          description: The user was soft removed successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/User'
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
  '/:email/remove',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByEmailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      console.log('[sof remove]')
      const users = await usersService.softRemove(email)

      response.success(res, users)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /users:
 *    delete:
 *      summary: Delete a user
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: email
 *          in: path
 *          description: The email of the user
 *          schema:
 *            type: string
 *            format: email
 *      responses:
 *        200:
 *          description: The user was deleted successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/User'
 *        404:
 *          description: The user was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.delete(
  '/:email',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByEmailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const users = await usersService.remove(email)

      response.success(res, users)
    } catch (error) {
      next(error)
    }
  })

export default router
