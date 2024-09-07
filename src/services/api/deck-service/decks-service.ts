
import {ApiService} from "@/services/api-service";
import {apiConfig} from "../../../../configs/apiConfig";




class DecksService extends ApiService {

    async getDecks(bearerToken?: string){
        const decksPath = '/v1/decks'
        const response= await super.get({path: decksPath, headers: {Authorization:`Bearer ${bearerToken}`}} )
        return response;
    }
    // async signUp(email: string, password: string): Promise<void> {
    //     const signUpPath = '/v1/auth/sign-up'
    //     const body = {email, password}
    //
    //     await super.post({path: signUpPath, body: body})
    // }


}
export const decksService = new DecksService([],[], apiConfig.baseUrl)

















