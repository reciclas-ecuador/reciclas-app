export const postLogActionCollaborator = async (submitDate: string, quantity: string, collaboratorEmail: string, collectCenterId: string, receiverEmail: string, idToken: string): Promise<string> => {
  const url = `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/api/v1/log-actions-collaborators`
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      data: {
        submitDate,
        quantity,
        collaboratorEmail,
        collectCenterId,
        receiverEmail
      },
      token: idToken
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${idToken}`
    }
  })
    .then(response => response.json())
    .then((json) => {
      return String(json.body.id)
    })
}

export const postObservation = (comment: string, logActionsCollaboratorId: string, idToken: string) => {
  const url = `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/api/v1/observations`
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      comment,
      logActionsCollaboratorId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${idToken}`
    }
  })
}
