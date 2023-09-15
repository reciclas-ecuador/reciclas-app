import Joi from 'joi'

const id = Joi.number()
const comment = Joi.string()
const logActionsCollaboratorId = Joi.number()

export const CreateObservationSchema = Joi.object({
  comment: comment.required(),
  logActionsCollaboratorId: logActionsCollaboratorId.required()
})

export const UpdateObservationSchema = Joi.object({
  comment,
  logActionsCollaboratorId
})

export const getByIdSchema = Joi.object({
  id: id.required()
})
