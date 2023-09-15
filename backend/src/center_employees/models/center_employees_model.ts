import Joi from 'joi'

const email = Joi.string().email()
const name = Joi.string()
const lastname = Joi.string()
const phone = Joi.string().min(10).max(10)

export const CreateCenterEmployeeSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required()
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
