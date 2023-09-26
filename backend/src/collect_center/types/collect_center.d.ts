// export interface CreateCollectCenter {
//   submitDate: Date
//   quantity: number
//   attentionQuality: number

//   collaboratorEmail: string
//   collectCenterId: number
//   receiverEmail: string
// }

export interface CreateCollectCenter {
  submitDate: Date
  address: string
  name: string
  hash: string

  locationId: number
  managerEmail: string
}
export type UpdateCollectCenter = Partial<Omit<CreateCollectCenter, 'locationId' | 'managerEmail'>>
