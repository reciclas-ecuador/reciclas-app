export interface CreateLocation {
  city: string
  province: string
}

export type UpdateLocation = Partial<CreateLocation>
