import { type Response as ResponseExpress } from 'express'

export class Response {
  success(res: ResponseExpress, body: any, statusCode = 200): void {
    res.status(statusCode).json({ error: null, body })
  }
}
