import Joi from 'joi'

const id = Joi.number()
const address = Joi.string()
const locationId = Joi.number()
const managerEmail = Joi.string().email()

export const createCollectCenter = Joi.object({
  address: address.required(),
  locationId: locationId.required(),
  managerEmail: managerEmail.required()
})

export const updateCollectCenter = Joi.object({
  address,
  locationId,
  managerEmail
})

export const getByIdSchema = Joi.object({
  id: id.required()
})
