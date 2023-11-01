import { type LoginResponse } from '../../src/auth/types/auth'

declare global {
  namespace Express {
    interface Request {
      user?: LoginResponse
    }
  }
}
