
import {ApiService} from "@/services/api-service";

import {CreateDeckResponse, DecksResponse} from "@/dto/decks/decks-dto";




export class DecksService extends ApiService {

    async getDecks(currentPage: number, itemsPerPage: number,bearerToken?: string):Promise<DecksResponse>{
        const decksPath = '/v1/decks'
        const queryParams = `?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`;
        const response = await super.get<DecksResponse>({path: decksPath+ queryParams, headers: {Authorization:`Bearer ${bearerToken}`}} )

        return response;
    }

    async createDeck(name:string, bearerToken?: string, cover?: File): Promise<CreateDeckResponse>{
        // cover todo COVER realization
        // string
        // binary
        // Cover image (has to be sent inside FormData, does NOT accept base64)
        const path = '/v1/decks'
        const formData = new FormData();

        formData.append('name', name);
        if (cover) {
            formData.append('cover', cover);
        }
        const headers = {Authorization:`Bearer ${bearerToken}`, 'Content-Type': 'multipart/form-data'};
        const response = await super.post<CreateDeckResponse>({
            path:path,
            body: formData,
            headers: headers
        } )
        return response

    }



}


















