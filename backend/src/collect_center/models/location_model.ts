import Joi from 'joi'

/**
 *@swagger
 *components:
 *  schemas:
 *    Location:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The unique identifier
 *        province:
 *          type: string
 *          description: The province of the location
 *        city:
 *          type: string
 *          description: The city of the location within the province
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date of creation of the user
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date of the last update of the user
 *      required:
 *        - province
 *        - city
 *      example:
 *        id: 1
 *        province: Pichincha
 *        city: Quito
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updatedAt: 2021-01-01T00:00:00.000Z
*/

const id = Joi.number()
const province = Joi.string().trim()
const city = Joi.string().trim()

/**
 *@swagger
 *components:
 *  schemas:
 *    CreateLocation:
 *      type: object
 *      properties:
 *        province:
 *          type: string
 *          description: The province of the location
 *        city:
 *          type: string
 *          description: The city of the location within the province
 *      required:
 *        - province
 *        - city
 *      example:
 *        province: Pichincha
 *        city: Quito
*/
export const createLocationSchema = Joi.object({
  province: province.required(),
  city: city.required()
})

/**
 *@swagger
 *components:
 *  schemas:
 *    UpdateLocation:
 *      type: object
 *      properties:
 *        province:
 *          type: string
 *          description: The province of the location
 *        city:
 *          type: string
 *          description: The city of the location within the province
 *      example:
 *        province: Pichincha
 *        city: Quito
 */
export const updateLocationSchema = Joi.object({
  province,
  city
})

export const getByIdSchema = Joi.object({
  id: id.required()
})

export const getByLogActionSchema = Joi.object({
  logActionCollaboratorId: id.required()
})
