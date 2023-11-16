import Joi from 'joi'

/**
 *@swagger
 *components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    RegisterUser:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The user email and unique identifier
 *          format: email
 *        password:
 *          type: string
 *          description: The user password
 *          minLength: 6
 *        ci:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The identification card number of the user
 *        name:
 *          type: string
 *          description: The name of the user
 *        phone:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The phone number of the user
 *        status:
 *          type: string
 *          enum: [active, inactive]
 *          description: The status of the user, can be active or inactive
 *        province:
 *          type: string
 *          description: The province of the user
 *        city:
 *          type: string
 *          description: The city of the user
 *        address:
 *          type: string
 *          description: The address of the user
 *        role:
 *          type: string
 *          enum: [ADMIN, USER, CENTER_EMPLOYEE]
 *          description: The role of the user
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date of creation of the user
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date of the last update of the user
 *      required:
 *        - email
 *        - password
 *        - ci
 *        - name
 *        - phone
 *        - province
 *        - city
 *        - address
 *        - role
 *      example:
 *        uid: 'A06LMFhqBIOcrPEQMsdtlXFqDYc2'
 *        email: jhondoe@email.com
 *        name: Jhon
 *        role: USER
*/

const id = Joi.number()
const ci = Joi.string().trim().length(10)
const name = Joi.string().trim()
const email = Joi.string().trim().email()
const password = Joi.string().trim().min(6)
const phone = Joi.string().trim().length(10)
const province = Joi.string().trim()
const city = Joi.string().trim()
const address = Joi.string().trim()
const role = Joi.string().trim().valid('ADMIN', 'USER', 'CENTER_EMPLOYEE')
const status = Joi.string().trim().valid('active', 'inactive')

/**
 *@swagger
 *components:
 *  schemas:
 *    CreateRegisterUser:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The user email and unique identifier
 *          format: email
 *        password:
 *          type: string
 *          description: The user password
 *          minLength: 6
 *        ci:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The identification card number of the user
 *        name:
 *          type: string
 *          description: The name of the user
 *        phone:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The phone number of the user
 *        status:
 *          type: string
 *          enum: [active, inactive]
 *          description: The status of the user, can be active or inactive
 *        province:
 *          type: string
 *          description: The province of the user
 *        city:
 *          type: string
 *          description: The city of the user
 *        address:
 *          type: string
 *          description: The address of the user
 *        role:
 *          type: string
 *          enum: [ADMIN, USER, CENTER_EMPLOYEE]
 *          description: The role of the user
 *      required:
 *        - email
 *        - password
 *        - ci
 *        - name
 *        - phone
 *        - province
 *        - city
 *        - address
 *        - role
 *      example:
 *        email: jhondoe@email.com
 *        password: '12345678'
 *        ci: '1717171717'
 *        name: Jhon Doe
 *        phone: "0999999999"
 *        status: active
 *        role: USER
 *        province: Pichincha
 *        city: Quito
 *        address: Av. Amazonas N23-56
*/
export const registerUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  ci: ci.required(),
  name: name.required(),
  phone: phone.required(),
  province: province.required(),
  city: city.required(),
  address: address.required(),
  role: role.required(),
  status
})

export const registerCenterEmployeeSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  name: name.required(),
  phone: phone.required(),
  role: role.required(),
  status,
  collectCenterId: id.required()
})

export const loginSchema = Joi.object({
  idToken: Joi.string().trim().required()
})

export const hashSchema = Joi.object({
  hash: Joi.string().trim().required()
})
