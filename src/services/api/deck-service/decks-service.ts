
import {ApiService} from "@/services/api-service";

import {DecksResponse} from "@/dto/decks/decks-dto";




export class DecksService extends ApiService {

    async getDecks(currentPage: number, itemsPerPage: number,bearerToken?: string):Promise<DecksResponse>{
        const decksPath = '/v1/decks'
        const queryParams = `?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`;
        const response = await super.get<DecksResponse>({path: decksPath+ queryParams, headers: {Authorization:`Bearer ${bearerToken}`}} )

        return response;
    }



}


















