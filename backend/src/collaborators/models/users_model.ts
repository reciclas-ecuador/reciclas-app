import Joi from 'joi'

const ci = Joi.string().trim().length(10)
const name = Joi.string().trim()
const lastname = Joi.string().trim()
const email = Joi.string().trim().email()
const phone = Joi.string().trim().length(10)
const province = Joi.string().trim()
const city = Joi.string().trim()
const address = Joi.string().trim()

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
