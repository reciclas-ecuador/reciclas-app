export interface CreateCenterEmployee {
  email: string
  name: string
  lastname: string
  phone: string
}

export type UpdateCenterEmployee = Partial<CreateCenterEmployee>
