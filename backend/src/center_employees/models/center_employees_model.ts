import Joi from 'joi'

const id = Joi.number()
const email = Joi.string().trim().email()
const name = Joi.string().trim()
const lastname = Joi.string().trim()
const phone = Joi.string().trim().min(10).max(10)

export const CreateCenterEmployeeSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required(),
  collectCenterId: id.required()
})

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
