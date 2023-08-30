import boom from '@hapi/boom'
import { type NextFunction, type Request, type Response } from 'express'
import { type ObjectSchema } from 'joi'

export const validationHandler = (schema: ObjectSchema, property: 'body' | 'params') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property]
    // abortEarly: false => return all errors
    const { error } = schema.validate(data, { abortEarly: false })

    if (error !== undefined) {
      next(boom.badRequest(error.message))
    }

    next()
  }
}
