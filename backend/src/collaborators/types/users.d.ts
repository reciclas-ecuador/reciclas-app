import { type Collaborator } from '@prisma/client'

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

interface EcoEquivalence {
  value: number
  unit: string
}
export interface UserEcoEquivalences {
  user: Collaborator
  ecoEquivalences: {
    totalRecycled: EcoEquivalence
    trees: EcoEquivalence
    water: EcoEquivalence
    energy: EcoEquivalence
    oil: EcoEquivalence
    co2: EcoEquivalence
    ligthsOn: EcoEquivalence
  }
}
