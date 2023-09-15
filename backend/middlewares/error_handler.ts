import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library'
import { type Request, type NextFunction, type Response } from 'express'

export const logError = (error: any, _req: Request, _res: Response, next: NextFunction): void => {
  console.log(error)
  next(error)
}

export const boomErrorHandler = (error: any, _req: Request, res: Response, next: NextFunction): Response<any, any> | undefined => {
  if (error.isBoom === true) {
    const { statusCode, payload } = error.output
    return res.status(statusCode).json({ error: payload, body: null })
  }
  next(error)
}

type PrismaError = PrismaClientInitializationError | PrismaClientKnownRequestError | PrismaClientUnknownRequestError | PrismaClientValidationError | PrismaClientRustPanicError

export const prismaErrorHandler = (error: PrismaError, _req: Request, res: Response, next: NextFunction): void => {
  if (error instanceof PrismaClientInitializationError) {
    const { name, message } = error
    res.status(500).json({ error: { name, message }, body: null })
  } else if (error instanceof PrismaClientKnownRequestError) {
    const { meta, message } = error
    res.status(409).json({ error: { message, meta }, body: null })
  } else if (error instanceof PrismaClientUnknownRequestError) {
    const { message } = error
    res.status(500).json({ error: { message }, body: null })
  } else if (error instanceof PrismaClientRustPanicError) {
    const { message } = error
    res.status(502).json({ error: { message }, body: null })
  } else if (error instanceof PrismaClientValidationError) {
    const { message } = error
    res.status(409).json({ error: { message }, body: null })
  }
  next(error)
}

export const generalErrorHandler = (error: any, _req: Request, res: Response, _next: NextFunction): void => {
  res.status(500).json({ error: error.message, body: null })
}
