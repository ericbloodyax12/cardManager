
import {ApiService} from "@/services/api-service";
import {apiConfig} from "../../../../configs/apiConfig";
import {DecksResponse} from "@/dto/decks/decks-dto";




class DecksService extends ApiService {

    async getDecks(bearerToken?: string):Promise<DecksResponse>{
        const decksPath = '/v1/decks'
        const response = await super.get<DecksResponse>({path: decksPath, headers: {Authorization:`Bearer ${bearerToken}`}} )

        return response;
    }



}
export const decksService = new DecksService([],[], apiConfig.baseUrl)

















