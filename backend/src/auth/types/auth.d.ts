export type Role = 'ADMIN' | 'USER' | 'CENTER_EMPLOYEE'

export interface RegisterUser {
  email: string
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
