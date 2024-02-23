import {authResponseType, DecksResponseType} from "@/services/api/authTypes";

export type TodosType = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

export const authServices = {
  baseUrl: 'https://api.flashcards.andrii.es',

  getTodos: async (): Promise<TodosType[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    return todos
  },

  getDecks: (): Promise<DecksResponseType> => {
    const decksPath = '/v1/decks'
    return fetch(authServices.baseUrl + decksPath, {
      headers: {'x-auth-skip': 'true'}
    })
        .then((res) => res.json())
        .then((data) => {
          return data
        })
  },

  getIsAuth: async () : Promise<boolean> => {
    const authPath = '/v1/auth/me'
    const res = await fetch(authServices.baseUrl + authPath, {
      headers: {'x-auth-skip': 'true'}
    })
    const isAuthResponse:authResponseType = await res.json()
    const isAuth = await isAuthResponse.isEmailVerified
    return isAuth
  },

} as const


// const baseUrl = 'https://api.flashcards.andrii.es'
// const  checkAuthentication = '/v1/auth/me'
//
// export function checkAuthenticationWithPromise() {
//     fetch(baseUrl+checkAuthentication)
//         .then((res) => {
//             console.log(res)
//             if (res.ok) {
//                 setIsAuthenticated(true)
//                 return res.json()
//             } else {
//                 throw new Error('Вы не авторизованы' + res.statusText )
//             }
//         } )
//         .then((data) => {
//             console.log('Success', data)
//         })
//         .catch((er) => {
//             console.error('here`s problem', er)
//         })
// }





