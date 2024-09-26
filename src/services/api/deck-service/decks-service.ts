
import {ApiService} from "@/services/api-service";

import {DecksResponse, IDeckBaseModel} from "@/dto/decks/decks-dto";





export class DecksService extends ApiService {

    private decksPath = '/v1/decks'

    async getDecks(currentPage: number, itemsPerPage: number,bearerToken?: string):Promise<DecksResponse>{
        const queryParams = `?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`;
        console.log('bearerToken',bearerToken)
        const response = await super.get<DecksResponse>({
            path: this.decksPath+ queryParams,
            headers: {Authorization:`Bearer ${bearerToken}`}
        } )
        return response;
    }

    async deleteDeck(deckId: string): Promise<IDeckBaseModel> {
        const deletePath = `${this.decksPath}/${deckId}`
        const res = await super.delete<IDeckBaseModel>({path: deletePath});
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

        const response = await fetch(`https://api.flashcards.andrii.es${this.decksPath}`,
            {
                headers: headers,
                method: "POST",
                body:formData,
                credentials: "include",
            });
        return  response as any

    }

    async updateDeck(deckId: string, bearerToken?:string, name?:string, cover?: File | undefined, isPrivate?: boolean ): Promise<IDeckBaseModel> {
        const updatePath = `${this.decksPath}/${deckId}`
        const headers = {
            Authorization: bearerToken ? `Bearer ${bearerToken}` : '',
        }
        const formData = new FormData();
        const appendFormData = (key: string, value: any ) => {
            if (value !== undefined && value !== null) {
                formData.append(key, value);
            }
        };
        appendFormData('name', name);
        appendFormData('isPrivate', isPrivate !== undefined ? String(isPrivate) : null);
        appendFormData('cover', cover);


        const res = await super.patch<IDeckBaseModel>({
            path: updatePath,
            body: formData,
            headers
        });
        return res
    }



}


















