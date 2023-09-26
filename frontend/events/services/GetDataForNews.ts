import { NewsData } from '../../Types'

export const GetDataForNews = (): Promise<NewsData> => {
  const url = 'https://reciclas-events.vercel.app/graphql'

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      query: `query eventosQuery{
            eventos {
              edges {
                node {
                  id
                  nombre
                  descripcion
                  fechaInicio
                  fechaFin
                  imagen {
                    node {
                      mediaItemUrl
                    }
                  }
                  modalidad
                  lugar
                  author {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }`
    })
  })
    .then(res => res.json())
    .then(data => data)
}
