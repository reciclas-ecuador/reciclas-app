import { type Collaborator } from '@prisma/client'

export interface CreateUser {
  ci: string
  name: string
  lastname: string
  email: string
  status: string
  phone: string
  province: string
  city: string
  address: string
}

export type UpdateUser = Partial<CreateUser>

interface EcoEquivalence {
  name: string
  value: number
  unit: string
}

export interface EcoEquivalences {
  totalRecycled: EcoEquivalence
  trees: EcoEquivalence
  water: EcoEquivalence
  energy: EcoEquivalence
  oil: EcoEquivalence
  co2: EcoEquivalence
  ligthsOn: EcoEquivalence
}
export interface UserEcoEquivalences {
  user: Collaborator
  ecoEquivalences: EcoEquivalences
}
