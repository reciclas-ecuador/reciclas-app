export const postCenterEmployee = (mail: string, name: string, lastName: string, phone: string, collectCenterId: string) => {
  const url = 'http://192.168.1.100:3000/api/v1/center-employees'
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email: mail,
      name,
      lastname: lastName,
      phone,
      collectCenterId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}
