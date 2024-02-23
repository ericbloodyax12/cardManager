export type TodosType = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}
export const getTodos = async (): Promise<TodosType[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await res.json()
  return todos
}


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





