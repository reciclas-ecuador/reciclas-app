import Joi from 'joi'

const ci = Joi.string().length(10)
const name = Joi.string()
const lastname = Joi.string()
const email = Joi.string().email()
const phone = Joi.string().length(10)
const province = Joi.string()
const city = Joi.string()
const address = Joi.string()

export const createUserSchema = Joi.object({
  ci: ci.required(),
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  status: Joi.string().valid('active', 'inactive').required(),
  phone: phone.required(),
  province: province.required(),
  city: city.required(),
  address: address.required()
})

export const updateUserSchema = Joi.object({
  ci,
  name,
  lastname,
  // email,
  phone,
  province,
  city,
  address
})

export const getByIdSchema = Joi.object({
  id: Joi.number().required()
})

export const getByEmailSchema = Joi.object({
  email: Joi.string().email().required()
})
