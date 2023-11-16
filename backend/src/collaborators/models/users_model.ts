import Joi from 'joi'

/**
 *@swagger
 *components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The user email and unique identifier
 *          format: email
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
 *        - ci
 *        - name
 *        - phone
 *        - status
 *        - province
 *        - city
 *        - address
 *      example:
 *        email: jhondoe@email.com
 *        ci: 1717171717
 *        name: Jhon Doe
 *        phone: "0999999999"
 *        status: active
 *        province: Pichincha
 *        city: Quito
 *        address: Av. Amazonas N23-56
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updatedAt: 2021-01-01T00:00:00.000Z
 *
 *    EcoEquivalence:
 *      type: object
 *      properties:
 *        value:
 *          type: number
 *        unit:
 *          type: string
 *
 *    UserEcoEquivalences:
 *      type: object
 *      properties:
 *        user:
 *          $ref: '#/components/schemas/User'
 *        ecoEquivalences:
 *          type: object
 *          properties:
 *            totalRecycled:
 *              $ref: '#/components/schemas/EcoEquivalence'
 *            trees:
 *              $ref: '#/components/schemas/EcoEquivalence'
 *            water:
 *              $ref: '#/components/schemas/EcoEquivalence'
 *            energy:
 *              $ref: '#/components/schemas/EcoEquivalence'
 *            oil:
 *              $ref: '#/components/schemas/EcoEquivalence'
 *            co2:
 *              $ref: '#/components/schemas/EcoEquivalence'
 *            ligthsOn:
 *              $ref: '#/components/schemas/EcoEquivalence'
 *      required:
 *        - user
 *        - ecoEquivalences
 *      example:
 *        user:
 *          email: jhondoe@email.com
 *          name: Jhon Doe
 *          phone: "0999999999"
 *          status: active
 *          province: Pichincha
 *          city: Quito
 *          address: Av. Amazonas N23-56
 *          createdAt: 2021-01-01T00:00:00.000Z
 *          updatedAt: 2021-01-01T00:00:00.000Z
 *        ecoEquivalences:
 *          totalRecycled:
 *            value: 100
 *            unit: kg
 *          trees:
 *            value: 100
 *            unit: trees
 *          water:
 *            value: 100
 *            unit: ltrs
 *          energy:
 *            value: 100
 *            unit: kWh
 *          oil:
 *            value: 100
 *            unit: ltrs
 *          co2:
 *            value: 100
 *            unit: kg
 *          ligthsOn:
 *            value: 100
 *            unit: hrs
*/

const ci = Joi.string().trim().length(10)
const name = Joi.string().trim()
const email = Joi.string().trim().email()
const status = Joi.string().valid('active', 'inactive')
const phone = Joi.string().trim().length(10)
const province = Joi.string().trim()
const city = Joi.string().trim()
const address = Joi.string().trim()

/**
 *@swagger
 *components:
 *  schemas:
 *    CreateUser:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The user email and unique identifier
 *          format: email
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
 *      required:
 *        - email
 *        - ci
 *        - name
 *        - phone
 *        - status
 *        - province
 *        - city
 *        - address
 *      example:
 *        email: jhondoe@email.com
 *        ci: 1717171717
 *        name: Jhon Doe
 *        phone: "0999999999"
 *        status: active
 *        province: Pichincha
 *        city: Quito
 *        address: Av. Amazonas N23-56
 *
 */
export const createUserSchema = Joi.object({
  ci: ci.required(),
  name: name.required(),
  email: email.required(),
  status: status.required(),
  phone: phone.required(),
  province: province.required(),
  city: city.required(),
  address: address.required()
})

/**
 *@swagger
 *components:
 *  schemas:
 *    UpdateUser:
 *      type: object
 *      properties:
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
 *      example:
 *        ci: 1717171717
 *        name: Jhon Doe
 *        phone: "0999999999"
 *        status: active
 *        province: Pichincha
 *        city: Quito
 *        address: Av. Amazonas N23-56
 *
 */

export const updateUserSchema = Joi.object({
  ci,
  name,
  // email,
  status,
  phone,
  province,
  city,
  address
})

export const getByIdSchema = Joi.object({
  id: Joi.number().required()
})

export const getByEmailSchema = Joi.object({
  email: Joi.string().email().required()
})
