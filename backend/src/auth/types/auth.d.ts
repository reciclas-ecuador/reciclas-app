import { type CreateCenterEmployee } from '../../center_employees/types/center_employees'
import { type CreateUser } from '../../collaborators/types/users'

export type Role = 'ADMIN' | 'USER' | 'CENTER_EMPLOYEE'

export interface RegisterUser extends CreateUser {
  password: string
  role: Role
}

export interface RegisterCenterEmployee extends CreateCenterEmployee {
  password: string
  role: Role
}

export interface LoginUser {
  email: string
  password: string
}

export interface RegisteredUser {
  uid: string
  email: string
  role: Role
}
