export const postUser = (userName: string, userLastName: string, userMail: string) => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: `${userName} - ${userLastName}`,
      body: userMail,
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}
