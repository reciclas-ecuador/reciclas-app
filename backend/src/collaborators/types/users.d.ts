export interface CreateUser {
  ci: string
  name: string
  lastname: string
  email: string
  phone: string
  province: string
  city: string
  address: string
}

export type UpdateUser = Partial<CreateUser>
