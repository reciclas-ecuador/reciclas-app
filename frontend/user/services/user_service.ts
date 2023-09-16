import { Data } from "../../Types"


export const getToDataUser = ():Promise<Data[]> => {
    const url = `https://jsonplaceholder.typicode.com/photos?id=1`
    // const url = `${Url.API}eventos/${id}`
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
}