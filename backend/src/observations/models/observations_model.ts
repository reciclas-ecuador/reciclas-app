import Joi from 'joi'

/**
 *@swagger
 *components:
 *  schemas:
 *    Observation:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The unique identifier
 *        comment:
 *          type: string
 *          description: The comment for the observation
 *        logActionsCollaboratorId:
 *          type: integer
 *          description: The id of the log action collaborator
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date of creation of the observation
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date of the last update of the observation
 *      required:
 *        - comment
 *        - logActionsCollaboratorId
 *      example:
 *        id: 1
 *        comment: The collaborator was very kind
 *        logActionsCollaboratorId: 1
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updatedAt: 2021-01-01T00:00:00.000Z
*/
const id = Joi.number()
const comment = Joi.string().trim()
const logActionsCollaboratorId = Joi.number()

/**
 *@swagger
 *components:
 *  schemas:
 *    CreateObservation:
 *      type: object
 *      properties:
 *        comment:
 *          type: string
 *          description: The comment for the observation
 *        logActionsCollaboratorId:
 *          type: integer
 *          description: The id of the log action collaborator
 *      required:
 *        - comment
 *        - logActionsCollaboratorId
 *      example:
 *        comment: The collaborator was very kind
 *        logActionsCollaboratorId: 1
*/
export const CreateObservationSchema = Joi.object({
  comment: comment.required(),
  logActionsCollaboratorId: logActionsCollaboratorId.required()
})

/**
 *@swagger
 *components:
 *  schemas:
 *    UpdateObservation:
 *      type: object
 *      properties:
 *        comment:
 *          type: string
 *          description: The comment for the observation
 *        logActionsCollaboratorId:
 *          type: integer
 *          description: The id of the log action collaborator
 *      example:
 *        comment: The collaborator was very kind
 *        logActionsCollaboratorId: 1
*/
export const UpdateObservationSchema = Joi.object({
  comment,
  logActionsCollaboratorId
})

export const getByIdSchema = Joi.object({
  id: id.required()
})

export const getByLogActionsCollaboratorIdSchema = Joi.object({
  logActionsCollaboratorId: logActionsCollaboratorId.required()
})
