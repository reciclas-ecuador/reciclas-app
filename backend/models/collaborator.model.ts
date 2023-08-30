import Joi from 'joi'

const ci = Joi.string().length(10)
const name = Joi.string()
const lastname = Joi.string()
const email = Joi.string().email()
const phone = Joi.string().length(10)
const province = Joi.string()
const city = Joi.string()
const address = Joi.string()

export interface CreateCollaborator {
  ci: string
  name: string
  lastname: string
  email: string
  phone: string
  province: string
  city: string
  address: string
}

export type UpdateCollaborator = Partial<CreateCollaborator>

export const createCollaboratorSchema = Joi.object({
  ci: ci.required(),
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  phone: phone.required(),
  province: province.required(),
  city: city.required(),
  address: address.required()
})

export const updateCollaboratorSchema = Joi.object({
  ci,
  name,
  lastname,
  email,
  phone,
  province,
  city,
  address
})

export const getByIdSchema = Joi.object({
  id: Joi.number().required()
})
