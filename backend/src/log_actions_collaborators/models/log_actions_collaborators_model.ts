import Joi from 'joi'

const submitDate = Joi.string()
const quantity = Joi.number().positive()
const attentionQuality = Joi.number().min(1).max(5)
const collaboratorEmail = Joi.string().email()
const collectCenterId = Joi.number().positive()
const receiverEmail = Joi.string().email()

export const CreateLogActionCollaboratorSchema = Joi.object({
  submitDate: submitDate.required(),
  quantity: quantity.required(),
  attentionQuality: attentionQuality.required(),
  collaboratorEmail: collaboratorEmail.required(),
  collectCenterId: collectCenterId.required(),
  receiverEmail: receiverEmail.required()
})

export const UpdateLogActionCollaboratorSchema = Joi.object({
  submitDate,
  quantity,
  attentionQuality
})

export const getByIdSchema = Joi.object({
  id: Joi.number().required()
})
