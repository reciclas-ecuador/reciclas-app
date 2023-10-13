export const postLogActionCollaborator = (submitDate: string, quantity: string, collaboratorEmail: string, collectCenterId: string, receiverEmail: string):Promise<string> => {
  const url = 'http://192.168.1.100:3000/api/v1/log-actions-collaborators'
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      submitDate,
      quantity,
      collaboratorEmail,
      collectCenterId,
      receiverEmail
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then((json) => {
      return String(json.body.id)
    })
}

export const postObservation = (comment: string, logActionsCollaboratorId: string) => {
  const url = 'http://192.168.1.100:3000/api/v1/observations'
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      comment,
      logActionsCollaboratorId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}
