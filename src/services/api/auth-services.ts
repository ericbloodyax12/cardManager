
import {ApiService} from "@/services/api-service";
import { UserTokensInfoI} from "@/dto/auth/auth-dto";
import {apiConfig} from "../../../configs/apiConfig";


class AuthServices extends ApiService {

  async getIsAuth(bearerToken?: string): Promise<void> {

    console.log(bearerToken)
    const authPath = '/v1/auth/me'
    await super.get({path: authPath, headers: {Authorization:`Bearer ${bearerToken}`}} ) // or this.

  }

  async signUp(email: string, password: string): Promise<void> {
    const signUpPath = '/v1/auth/sign-up'
    const body = {email, password}

    await super.post({path: signUpPath, body: body})
  }
  async forgotPassword(email: string): Promise<void> {
    const forgotPasswordPath = '/v1/auth/recover-password'
    const body = {email}
    await super.post({path: forgotPasswordPath, body: body})
  }
  async resetPassword(id:string, password: string): Promise<void> {
    const resetPasswordPath = `/v1/auth/reset-password/${id}`
    const body = {password}
    await super.post({path: resetPasswordPath, body: body})
  }
  async signIn(email: string, password: string, rememberMe: boolean): Promise<UserTokensInfoI> {
    const signInPath = '/v1/auth/login'
    const body = {email, password,rememberMe}

   return await super.post({path: signInPath, body})
  }

} //как сделать аналог as const для классов
export const authServices = new AuthServices([],[], apiConfig.baseUrl)






