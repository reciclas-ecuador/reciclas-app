import { Router } from 'express'
import CollectCenterService from '../../collect_center/services/collect_center_service'
import { validationHandler } from '../../../middlewares/validation_handler'
import { hashSchema, loginSchema, registerCenterEmployeeSchema, registerUserSchema } from '../models/auth_model'
import AuthService from '../services/auth_service'
import { Response } from '../../../libs/response'

const collectCenterService = new CollectCenterService()
const authService = new AuthService()
const router = Router()
const response = new Response()

/**
 *  @swagger
 *  /auth/register-user:
 *    post:
 *      summary: Register a new user in firebase and in the database
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateRegisterUser'
 *      responses:
 *        201:
 *          description: The user was registered successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/RegisterUser'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
*/
router.post(
  '/register-user',
  validationHandler(registerUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const user = await authService.createUser(body)
      response.success(res, user, 201)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /auth/register-employee:
 *    post:
 *      summary: Register a new employee in firebase and in the database
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateRegisterUser'
 *      responses:
 *        201:
 *          description: The user was registered successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/RegisterUser'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
*/
router.post(
  '/register-employee',
  validationHandler(registerCenterEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const user = await authService.createEmployee(body)
      response.success(res, user, 201)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /auth/validate-hash:
 *    post:
 *      summary: Validate if the hash is valid and represents a collect center
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                hash:
 *                  type: string
 *                  description: The hash to validate
 *      responses:
 *        200:
 *          description: The user was registered successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                   $ref: '#/components/schemas/CollectCenter'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
*/
router.post(
  '/validate-hash',
  validationHandler(hashSchema, 'body'),
  async (req, res, next) => {
    try {
      const { hash } = req.body
      const collectCenter = await collectCenterService.verifyHash(hash)
      response.success(res, collectCenter)
    } catch (error) {
      next(error)
    }
  })

/**
 *  @swagger
 *  /auth/login:
 *    post:
 *      summary: Receive a token from firebase and validate it
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                idToken:
 *                  type: string
 *                  description: the firebase token to validate
 *      responses:
 *        200:
 *          description: The user was registered successfully
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
 *                      role:
 *                        type: string
 *                        example: USER
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
*/
router.post(
  '/login',
  validationHandler(loginSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idToken } = req.body
      const user = await authService.verifyIdToken(idToken)
      response.success(res, user)
    } catch (error) {
      next(error)
    }
  })

export default router
