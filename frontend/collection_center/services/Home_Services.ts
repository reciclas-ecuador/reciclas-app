import { CenterEmployee, CollectionCenter } from '../../Types'

export const getToDataCenterEmployee = (centerEmployeeEmail: string): Promise<CenterEmployee> => {
  const url = `http://192.168.1.100:3000/api/v1/center-employees/${centerEmployeeEmail}`
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

export const getToDataCollectionCenter = (collectionCenterId: number|undefined): Promise<CollectionCenter> => {
  const url = `http://192.168.1.100:3000/api/v1/collect-centers/${collectionCenterId}`
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
