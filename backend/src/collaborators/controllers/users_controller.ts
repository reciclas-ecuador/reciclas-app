import { Router } from 'express'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import { createUserSchema, getByEmailSchema, updateUserSchema } from '../models/users_model'
import { Response } from '../../../libs/response'
import UsersService from '../services/users_service'

const router = Router()
const response = new Response()
const usersService = new UsersService()

router.use(checkTokenAndRoles(['ADMIN']))

/**
 * @swagger
 *  /users:
 *    get:
 *      summary: Get all registered users
 *      tags: [Users]
 *      responses:
 *        200:
 *          description: List of users
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 */
router.get('/', async (_req, res, next) => {
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
router.get('/:email', validationHandler(getByEmailSchema, 'params'), async (req, res, next) => {
  try {
    const users = await usersService.getOne(req.params.email)

    response.success(res, users)
  } catch (error) {
    next(error)
  }
})

/**
 *  @swagger
 *  /users/{email}/ecoequivalences:
 *    get:
 *      summary: Get a user by email
 *      tags: [Users]
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
router.get('/:email/ecoequivalences', validationHandler(getByEmailSchema, 'params'), async (req, res, next) => {
  try {
    const total = await usersService.getEcoEquivalences(req.params.email)

    response.success(res, total)
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
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
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
router.post('/', validationHandler(createUserSchema, 'body'), async (req, res, next) => {
  try {
    const users = await usersService.create(req.body)

    response.success(res, users, 201)
  } catch (error) {
    next(error)
  }
})

router.patch(
  '/:email',
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

router.delete(
  '/:email',
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
