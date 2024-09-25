
import {ApiService} from "@/services/api-service";

import {DecksResponse, IDeckBaseModel} from "@/dto/decks/decks-dto";





export class DecksService extends ApiService {

    async getDecks(currentPage: number, itemsPerPage: number,bearerToken?: string):Promise<DecksResponse>{
        const decksPath = '/v1/decks'
        const queryParams = `?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`;
        console.log('bearerToken',bearerToken)
        const response = await super.get<DecksResponse>({path: decksPath+ queryParams, headers: {Authorization:`Bearer ${bearerToken}`}} )

        return response;
    }

    async createDeck(name:string, bearerToken?: string, cover?: File): Promise<IDeckBaseModel>{

        const path = '/v1/decks'
        const formData = new FormData();
        console.log(name)
        formData.set('name', name);

        console.log(   formData.get('name'), "   formData.get('name')")
        if (cover) {
            formData.append('cover', cover);
        }
        const headers = {
            Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
        };
        console.log(formData, "test")
        // const response = await super.post<IDeckBaseModel>({ //todo из за  const stringifiedBody = JSON.stringify(body) cервер неправиправильно обрабатывает контент type  тип multi form deckInfoDialog поставить флаг можно в сервайсе на этот кейс

        //     path:path,
        //     body: formData,
        //     headers: headers
        // } )

        const response = await fetch('https://api.flashcards.andrii.es/v1/decks',
            {
                headers: headers,
                method: "POST",
                body:formData,
                credentials: "include",
            });
        return  response as any

    }



}


















