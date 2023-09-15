export interface CreateObservation {
  comment: string
  logActionsCollaboratorId: number
}

export type UpdateObservation = Partial<Omit<CreateObservation, 'logActionsCollaboratorId'>>
