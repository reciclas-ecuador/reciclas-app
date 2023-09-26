import Joi from 'joi'

const id = Joi.number()
const ci = Joi.string().trim().length(10)
const name = Joi.string().trim()
const lastname = Joi.string().trim()
const email = Joi.string().trim().email()
const password = Joi.string().trim().min(6)
const phone = Joi.string().trim().length(10)
const province = Joi.string().trim()
const city = Joi.string().trim()
const address = Joi.string().trim()
const role = Joi.string().trim().valid('ADMIN', 'USER', 'CENTER_EMPLOYEE')

export const registerUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  ci: ci.required(),
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required(),
  province: province.required(),
  city: city.required(),
  address: address.required(),
  role: role.required()
})

export const registerCenterEmployeeSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required(),
  role: role.required(),
  collectCenterId: id.required()
})

export const loginSchema = Joi.object({
  email: email.required(),
  password: password.required()
})

export const hashSchema = Joi.object({
  hash: Joi.string().trim().required()
})
