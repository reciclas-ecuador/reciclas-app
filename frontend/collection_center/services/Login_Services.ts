export const postCenterEmployeeIdToken = async (idToken: string): Promise<string> => {
  const url = 'http://192.168.1.105:3000/api/v1/auth/login'
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      idToken
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      return String(data.role)
    })
    .catch(error => {
      console.error('Fetch error:', error)
      return 'error'
    })
}
