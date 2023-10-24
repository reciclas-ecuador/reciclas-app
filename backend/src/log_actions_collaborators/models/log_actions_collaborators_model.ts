import Joi from 'joi'

/**
 *@swagger
 *components:
 *  schemas:
 *    LogActionsCollaborators:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The unique identifier
 *        submitDate:
 *          type: string
 *          format: date-time
 *          description: The exactly date of the log action
 *        quantity:
 *          type: number
 *          description: Amount of bottles delivered in kg
 *        attentionQuality:
 *          type: integer
 *          minimum: 1
 *          maximum: 5
 *          nullable: true
 *          description: The qualification of the attention received
 *        collectCenterId:
 *          type: integer
 *          description: The id of the collect center
 *        collaboratorEmail:
 *          type: string
 *          format: email
 *          description: The email of the user who delivered the bottles
 *        receiverEmail:
 *          type: string
 *          format: email
 *          description: The email of the employee who received the bottles
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date of creation of the user
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date of the last update of the user
 *      required:
 *        - submitDate
 *        - quantity
 *        - collaboratorEmail
 *        - collectCenterId
 *        - receiverEmail
 *      example:
 *        id: 1
 *        submitDate: 2023-09-16T14:30:00.000Z
 *        quantity: 12.34
 *        attentionQuality: 5
 *        collaboratorEmail: frankz@email.com
 *        collectCenterId: 1
 *        receiverEmail: david@email.com
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updatedAt: 2021-01-01T00:00:00.000Z
*/
const submitDate = Joi.string().trim()
const quantity = Joi.number().positive()
const attentionQuality = Joi.number().min(1).max(5)
const collaboratorEmail = Joi.string().trim().email()
const collectCenterId = Joi.number().positive()
const receiverEmail = Joi.string().trim().email()
const token = Joi.string().trim()

/**
 *@swagger
 *components:
 *  schemas:
 *    CreateLogActionsCollaborators:
 *      type: object
 *      properties:
 *        submitDate:
 *          type: string
 *          format: date-time
 *          description: The exactly date of the log action
 *        quantity:
 *          type: number
 *          description: Amount of bottles delivered in kg
 *        attentionQuality:
 *          type: integer
 *          minimum: 1
 *          maximum: 5
 *          nullable: true
 *          description: The qualification of the attention received
 *        collectCenterId:
 *          type: integer
 *          description: The id of the collect center
 *        collaboratorEmail:
 *          type: string
 *          format: email
 *          description: The email of the user who delivered the bottles
 *        receiverEmail:
 *          type: string
 *          format: email
 *          description: The email of the employee who received the bottles
 *      required:
 *        - submitDate
 *        - quantity
 *        - collaboratorEmail
 *        - collectCenterId
 *        - receiverEmail
 *      example:
 *        submitDate: 2023-09-16T14:30:00.000Z
 *        quantity: 12.34
 *        attentionQuality: 5
 *        collaboratorEmail: frankz@email.com
 *        collectCenterId: 1
 *        receiverEmail: david@email.com
*/
export const CreateLogActionCollaboratorSchema = Joi.object({
  data: Joi.object({
    submitDate: submitDate.required(),
    quantity: quantity.required(),
    attentionQuality,
    collaboratorEmail: collaboratorEmail.required(),
    collectCenterId: collectCenterId.required(),
    receiverEmail: receiverEmail.required()
  }).required(),
  token: token.required()
})

/**
 *@swagger
 *components:
 *  schemas:
 *    UpdateLogActionsCollaborators:
 *      type: object
 *      properties:
 *        submitDate:
 *          type: string
 *          format: date-time
 *          description: The exactly date of the log action
 *        quantity:
 *          type: number
 *          description: Amount of bottles delivered in kg
 *        attentionQuality:
 *          type: integer
 *          minimum: 1
 *          maximum: 5
 *          nullable: true
 *          description: The qualification of the attention received
 *        collectCenterId:
 *          type: integer
 *          description: The id of the collect center
 *        collaboratorEmail:
 *          type: string
 *          format: email
 *          description: The email of the user who delivered the bottles
 *        receiverEmail:
 *          type: string
 *          format: email
 *          description: The email of the employee who received the bottles
 *      example:
 *        submitDate: 2023-09-16T14:30:00.000Z
 *        quantity: 12.34
 *        attentionQuality: 5
 *        collaboratorEmail: frankz@email.com
 *        collectCenterId: 1
 *        receiverEmail: david@email.com
*/
export const UpdateLogActionCollaboratorSchema = Joi.object({
  submitDate,
  quantity,
  attentionQuality
})

export const getByIdSchema = Joi.object({
  id: Joi.number().required()
})

export const getAttentionQualitySchema = Joi.object({
  attentionQuality: attentionQuality.required()
})

export const getByUserSchema = Joi.object({
  email: collaboratorEmail.required()
})
