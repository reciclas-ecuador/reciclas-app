export const postQuantity = (user: string, quantity: string, observation: string) => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: `${user} - ${quantity}`,
      body: `${observation}`,
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}
