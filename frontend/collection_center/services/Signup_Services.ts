import { CollectionCenters } from '../../Types'

export const postCenterEmployee = (email: string, name: string, lastname: string, phone: string, password: string, collectCenterId: string) => {
  const url = `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/api/v1/auth/register-employee`
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      name,
      lastname,
      phone,
      password,
      role: 'CENTER_EMPLOYEE',
      collectCenterId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

export const getCollectionsCenters = async (): Promise<CollectionCenters> => {
  const url = `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/api/v1/collect-centers/all`
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('Fetch error:', error)
    })
}
