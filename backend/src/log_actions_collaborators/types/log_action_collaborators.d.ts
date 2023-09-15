export interface CreateLogActionCollaborator {
  submitDate: string
  quantity: number
  attentionQuality: number

  collaboratorEmail: string
  collectCenterId: number
  receiverEmail: string
}

export type UpdateLogActionCollaborator = Partial<Omit<CreateLogActionCollaborator, 'collaboratorEmail' | 'collectCenterId' | 'receiverEmail'>>
