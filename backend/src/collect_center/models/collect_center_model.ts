import Joi from 'joi'

const id = Joi.number()
const address = Joi.string().trim()
const name = Joi.string().trim()
const hash = Joi.string().trim()
const locationId = Joi.number()
const managerEmail = Joi.string().trim().email()

export const createCollectCenter = Joi.object({
  address: address.required(),
  name: name.required(),
  hash: hash.required(),
  locationId: locationId.required(),
  managerEmail: managerEmail.required()
})

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

export const getByLocationIdSchema = Joi.object({
  locationId: locationId.required()
})

export const updateHashSchema = Joi.object({
  hash: hash.required()
})
