
import {ApiService} from "@/services/api-service";


class AuthServices extends ApiService {

  async getIsAuth(bearerToken?: string): Promise<void> {
    const bearerExampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMTY4OWE4NS00MzcxLTRjM2QtOGE0Yy03N2Q3ODJlZDk2MGQiLCJkYXRlIjoiMjAyNC0wNy0yOVQxNDowMTo0Mi45NTZaIiwiaWF0IjoxNzIyMjYxNzAyLCJleHAiOjE3MjIzNDgxMDJ9.bkIPpQka5U3LINKGHnJrIv7HOxJ7fXTYCr09A-7EXLI"
    console.log(bearerToken)
    const authPath = '/v1/auth/me'
    await super.get({path: authPath, headers: {Authorization:`Bearer ${bearerExampleToken}`}} ) // or this.

  }

  async postCreateUser(email: string, password: string): Promise<void> {
    const signUpPath = '/v1/auth/sign-up'
    const body = {email, password}

    await super.post({path: signUpPath, body: body})
  }
  async signIn(email: string, password: string, rememberMe: boolean): Promise<void> {
    const signInPath = '/v1/auth/login'
    const body = {email, password,rememberMe}

    await super.post({path: signInPath, body})
  }

} //как сделать аналог as const для классов
export const authServices = new AuthServices([],[],'https://api.flashcards.andrii.es')






