import Joi from 'joi'

const id = Joi.number()
const province = Joi.string()
const city = Joi.string()

export const createLocationSchema = Joi.object({
  province: province.required(),
  city: city.required()
})

export const updateLocationSchema = Joi.object({
  province,
  city
})

export const getByIdSchema = Joi.object({
  id: id.required()
})
