import { Router } from 'express'
import CenterEmployeesService from '../services/center_employees_service'
import { Response } from '../../../libs/response'
import { checkTokenAndRoles, validationHandler } from '../../../middlewares/validation_handler'
import { CreateCenterEmployeeSchema, UpdateCenterEmployeeSchema, getByCollectCenterIdSchema, getByEmailSchema } from '../models/center_employees_model'

const router = Router()
const centerEmployeeService = new CenterEmployeesService()
const response = new Response()

/**
 * @swagger
 *  /center-employees:
 *    get:
 *      summary: Get all center employees registered
 *      tags: [Center Employees]
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
 *                      $ref: '#/components/schemas/CenterEmployee'
*/
router.get(
  '/',
  checkTokenAndRoles(['ADMIN']),
  async (_req, res, next) => {
    try {
      const centerEmployees = await centerEmployeeService.getAll()
      response.success(res, centerEmployees)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /center-employees/{email}:
 *    get:
 *      summary: Get a center employee by email
 *      tags: [Center Employees]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: email
 *            in: path
 *            description: The email of the center employee
 *            schema:
 *              type: string
 *              format: email
 *      responses:
 *        200:
 *          description: The center employee description by email
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CenterEmployee'
 *        404:
 *          description: The center employee was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/:email',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByEmailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const centerEmployee = await centerEmployeeService.getOne(email)
      response.success(res, centerEmployee)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /center-employees/{collectCenterId}:
 *    get:
 *      summary: Get all employees by collect center id
 *      tags: [Center Employees]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - name: Collect Center Id
 *            in: path
 *            description: The Collect Center Id that the center employee belongs to
 *            schema:
 *              type: integer
 *      responses:
 *        200:
 *          description: List of center employees that belongs to the collect center
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
 *                      $ref: '#/components/schemas/CenterEmployee'
 *        404:
 *          description: The Collect Center was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.get(
  '/collect-center/:collectCenterId',
  checkTokenAndRoles(['ADMIN', 'CENTER_EMPLOYEE']),
  validationHandler(getByCollectCenterIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const { collectCenterId } = req.params
      const centerEmployees = await centerEmployeeService.getAllByCollectCenter(parseInt(collectCenterId))

      response.success(res, centerEmployees)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /center-employees:
 *    post:
 *      summary: Create a new Center Employee
 *      tags: [Center Employees]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateCenterEmployee'
 *      responses:
 *        201:
 *          description: The center employee was created successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CenterEmployee'
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
  validationHandler(CreateCenterEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const centerEmployee = await centerEmployeeService.create(req.body)
      response.success(res, centerEmployee, 201)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /center-employees/{email}:
 *    patch:
 *      summary: Update a center employee
 *      tags: [Center Employees]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: email
 *          in: path
 *          description: The email of the center employee
 *          schema:
 *            type: string
 *            format: email
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateCenterEmployee'
 *      responses:
 *        200:
 *          description: The center employee was updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CenterEmployee'
 *        400:
 *          description: Some of the required fields are missing
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequest'
 *        404:
 *          description: The center employee was not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotFound'
*/
router.patch(
  '/:email',
  checkTokenAndRoles(['ADMIN']),
  validationHandler(getByEmailSchema, 'params'),
  validationHandler(UpdateCenterEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { email } = req.params
      const centerEmployee = await centerEmployeeService.update(email, req.body)
      response.success(res, centerEmployee)
    } catch (error) {
      next(error)
    }
  }
)

/**
 *  @swagger
 *  /center-employees/{email}:
 *    delete:
 *      summary: Delete a center employee
 *      tags: [Center Employees]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - name: email
 *          in: path
 *          description: The email of the center employee
 *          schema:
 *            type: string
 *            format: email
 *      responses:
 *        200:
 *          description: The center employee was deleted successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    example: null
 *                  body:
 *                    $ref: '#/components/schemas/CenterEmployee'
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
      const centerEmployee = await centerEmployeeService.remove(email)
      response.success(res, centerEmployee)
    } catch (error) {
      next(error)
    }
  }
)

export default router
