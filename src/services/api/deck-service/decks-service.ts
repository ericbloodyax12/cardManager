
import {ApiService} from "@/services/api-service";

import {DecksResponse, IDeckBaseModel} from "@/dto/decks/decks-dto";
import {urlJoin} from "url-join-ts";





export class DecksService extends ApiService {
    private _path = '/v1/decks'
  async getDecks(currentPage: number, itemsPerPage: number,bearerToken?: string):Promise<DecksResponse>{
        const queryParams = `?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`;
        const path = urlJoin(this._path, queryParams);
        const response = await super.get<DecksResponse>({path: path, headers: {Authorization:`Bearer ${bearerToken}`}} )
        return response;
    }

    async deleteDeck(deckId: string): Promise<IDeckBaseModel> {
        const decksPath = `${this._path}/${deckId}`
        const res = await super.delete<IDeckBaseModel>({path: decksPath});
        return res
    }
    async createDeck(name:string, bearerToken?: string, cover?: File): Promise<IDeckBaseModel>{


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

        const response = await fetch(`https://api.flashcards.andrii.es${this._path}`,
            {
                headers: headers,
                method: "POST",
                body:formData,
                credentials: "include",
            });
        return  response as any

    }



}


















