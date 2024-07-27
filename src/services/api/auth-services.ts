import { CreateUserResponseType} from "@/services/api/authTypes";
import {ApiService} from "@/services/api-service";

class AuthServices extends ApiService {

  private readonly baseUrl = 'https://api.flashcards.andrii.es'

  async getIsAuth(): Promise<void> {
    const authPath = '/v1/auth/me'
    this.get({path: authPath})

  }

  async postCreateUser(email: string, password: string): Promise<CreateUserResponseType> {
    const signUpPath = '/v1/auth/sign-up'
    const response = await fetch(this.baseUrl + signUpPath, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify({email, password})
    });
    if (response.status !== 201) {
      const errorData = await response.json()
      const errorMessage = errorData.errorMessages[0]
      throw new Error(errorMessage)
    }
    return await response.json()
  }

} //как сделать аналог as const для классов
export const authServices = new AuthServices([],[],'https://api.flashcards.andrii.es')






