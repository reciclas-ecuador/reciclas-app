import Joi from 'joi'

/**
 *@swagger
 *components:
 *  schemas:
 *    CenterEmployee:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The center employee email and unique identifier
 *          format: email
 *        ci:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The identification card number of the center employee
 *        name:
 *          type: string
 *          description: The name of the center employee
 *        lastname:
 *          type: string
 *          description: The lastname of the center employee
 *        phone:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The phone number of the center employee
 *        collectCenterId:
 *          type: integer
 *          description: The foreign key of the collect center that the center employee belongs to
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date of creation of the center employee
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date of the last update of the center employee
 *      required:
 *        - email
 *        - ci
 *        - name
 *        - lastname
 *        - phone
 *        - collectCenterId
 *      example:
 *        email: jhondoe@email.com
 *        ci: 1717171717
 *        name: Jhon
 *        lastname: Doe
 *        phone: "0999999999"
 *        collectCenterId: 1
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updatedAt: 2021-01-01T00:00:00.000Z
*/

const id = Joi.number()
const email = Joi.string().trim().email()
const name = Joi.string().trim()
const lastname = Joi.string().trim()
const phone = Joi.string().trim().min(10).max(10)

/**
 *@swagger
 *components:
 *  schemas:
 *    CreateCenterEmployee:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The center employee email and unique identifier
 *          format: email
 *        ci:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The identification card number of the center employee
 *        name:
 *          type: string
 *          description: The name of the center employee
 *        lastname:
 *          type: string
 *          description: The lastname of the center employee
 *        phone:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The phone number of the center employee
 *        collectCenterId:
 *          type: integer
 *          description: The foreign key of the collect center that the center employee belongs to
 *      required:
 *        - email
 *        - ci
 *        - name
 *        - lastname
 *        - phone
 *        - collectCenterId
 *      example:
 *        email: jhondoe@email.com
 *        ci: 1717171717
 *        name: Jhon
 *        lastname: Doe
 *        phone: "0999999999"
 *        collectCenterId: 1
*/
export const CreateCenterEmployeeSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required(),
  collectCenterId: id.required()
})

/**
 *@swagger
 *components:
 *  schemas:
 *    UpdateCenterEmployee:
 *      type: object
 *      properties:
 *        ci:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The identification card number of the center employee
 *        name:
 *          type: string
 *          description: The name of the center employee
 *        lastname:
 *          type: string
 *          description: The lastname of the center employee
 *        phone:
 *          type: string
 *          minLength: 10
 *          maxLength: 10
 *          description: The phone number of the center employee
 *      example:
 *        ci: 1717171717
 *        name: Jhon
 *        lastname: Doe
 *        phone: "0999999999"
*/
export const UpdateCenterEmployeeSchema = Joi.object({
  // email,
  name,
  lastname,
  phone
})

export const getByEmailSchema = Joi.object({
  email: email.required()
})

export const getByCollectCenterIdSchema = Joi.object({
  collectCenterId: id.required()
})
