import Joi from 'joi'

/**
 *@swagger
 *components:
 *  schemas:
 *    CollectCenter:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The unique identifier
 *        name:
 *          type: string
 *          description: The name of the collect center
 *        hash:
 *          type: string
 *          description: A hash to identify the collect center, it should be unique and change every 24 hours
 *        address:
 *          type: string
 *          description: The address of the collect center
 *        locationId:
 *          type: integer
 *          description: The id of the location of the collect center
 *        managerEmail:
 *          type: string
 *          format: email
 *          nullable: true
 *          description: The email of the manager of the collect center
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date of creation of the user
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date of the last update of the user
 *      required:
 *        - name
 *        - hash
 *        - address
 *        - locationId
 *      example:
 *        id: 1
 *        name: Centro de recolección 1
 *        hash: "12345"
 *        address: Av. 6 de Diciembre N32-123 y Av. Colón
 *        locationId: 1
 *        managerEmail: null
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updatedAt: 2021-01-01T00:00:00.000Z
 *    CollectCenterWithEmployees:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The unique identifier
 *        name:
 *          type: string
 *          description: The name of the collect center
 *        hash:
 *          type: string
 *          description: A hash to identify the collect center, it should be unique and change every 24 hours
 *        address:
 *          type: string
 *          description: The address of the collect center
 *        locationId:
 *          type: integer
 *          description: The id of the location of the collect center
 *        managerEmail:
 *          type: string
 *          format: email
 *          nullable: true
 *          description: The email of the manager of the collect center
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date of creation of the user
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date of the last update of the user
 *        collectCenterEmployees:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/CollectCenterEmployee'
 *      required:
 *        - name
 *        - hash
 *        - address
 *        - locationId
 *      example:
 *        id: 1
 *        name: Centro de recolección 1
 *        hash: "12345"
 *        address: Av. 6 de Diciembre N32-123 y Av. Colón
 *        locationId: 1
 *        managerEmail: null
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updatedAt: 2021-01-01T00:00:00.000Z
 *        collectCenterEmployees: []
*/
const id = Joi.number()
const address = Joi.string().trim()
const name = Joi.string().trim()
const hash = Joi.string().trim()
const locationId = Joi.number()
const lat = Joi.string().trim()
const lng = Joi.string().trim()
const managerEmail = Joi.string().trim().email()

/**
 *@swagger
 *components:
 *  schemas:
 *    CreateCollectCenter:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the collect center
 *        hash:
 *          type: string
 *          description: A hash to identify the collect center, it should be unique and change every 24 hours
 *        address:
 *          type: string
 *          description: The address of the collect center
 *        locationId:
 *          type: integer
 *          description: The id of the location of the collect center
 *        managerEmail:
 *          type: string
 *          format: email
 *          nullable: true
 *          description: The email of the manager of the collect center
 *      required:
 *        - name
 *        - hash
 *        - address
 *        - locationId
 *      example:
 *        name: Centro de recolección 1
 *        hash: 12345
 *        address: Av. 6 de Diciembre N32-123 y Av. Colón
 *        locationId: 1
 *        managerEmail: frankz@correo.com
*/
export const createCollectCenter = Joi.object({
  address: address.required(),
  name: name.required(),
  hash: hash.required(),
  locationId: locationId.required(),
  lat: lat.required(),
  lng: lng.required(),
  managerEmail
})

/**
 *@swagger
 *components:
 *  schemas:
 *    UpdateCollectCenter:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the collect center
 *        hash:
 *          type: string
 *          description: A hash to identify the collect center, it should be unique and change every 24 hours
 *        address:
 *          type: string
 *          description: The address of the collect center
 *        locationId:
 *          type: integer
 *          description: The id of the location of the collect center
 *        managerEmail:
 *          type: string
 *          format: email
 *          nullable: true
 *          description: The email of the manager of the collect center
 *      example:
 *        name: Centro de recolección 1
 *        hash: 12345
 *        address: Av. 6 de Diciembre N32-123 y Av. Colón
 *        locationId: 1
 *        managerEmail: frankz@correo.com
*/
export const updateCollectCenter = Joi.object({
  address,
  name,
  hash,
  locationId,
  managerEmail
})

export const getByIdSchema = Joi.object({
  id: id.required()
})

export const setCollectCenterManagerSchema = Joi.object({
  managerEmail: managerEmail.required()
})

export const getByLocationIdSchema = Joi.object({
  locationId: locationId.required()
})

export const updateHashSchema = Joi.object({
  hash: hash.required()
})
