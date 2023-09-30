import { User } from '../../Types'

export const getToDataUser = (userEmail: string): Promise<User> => {
  const url = `http://192.168.1.100:3000/api/v1/users/${userEmail}`
  // const url = `${Url.API}eventos/${id}`
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

export const getToDataCollectionCenter = (collectionCenterId: string): Promise<User> => {
  const url = `http://192.168.1.100:3000/api/v1/users/${collectionCenterId}`
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
}

// export const getToDataCollectionCenter = (collectionCenterId: number): Promise<CollectionCenter> => {
//   const url = `http://localhost:3000/api/v1/collect-centers/${collectionCenterId}`
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => data)
// }
