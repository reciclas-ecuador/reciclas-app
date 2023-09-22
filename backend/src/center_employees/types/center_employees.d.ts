export interface CreateCenterEmployee {
  email: string
  name: string
  lastname: string
  phone: string
  collectCenterId: number
}

export type UpdateCenterEmployee = Partial<CreateCenterEmployee>
