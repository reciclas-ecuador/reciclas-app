import { type Request, type NextFunction, type Response } from 'express'

export const logError = (error: any, _req: Request, _res: Response, next: NextFunction): void => {
  console.log(error)
  next(error)
}

export const boomErrorHandler = (error: any, _req: Request, res: Response, next: NextFunction): Response<any, any> | undefined => {
  if (error.isBoom === true) {
    const { statusCode, payload } = error.output
    return res.status(statusCode).json({ error: payload, body: '' })
  }
  next(error)
}
