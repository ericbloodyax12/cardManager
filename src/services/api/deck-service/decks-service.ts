
import {ApiService} from "@/services/api-service";

import {DecksResponse, IDeckBaseModel} from "@/dto/decks/decks-dto";
import {appendFormData} from "@/services/servicesHelpers/appendFormData";

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

  async deleteDeck(deckId: string, bearerToken: string ): Promise<IDeckBaseModel> {
    const deletePath = `${this.decksPath}/${deckId}`
    const res = await super.delete<IDeckBaseModel>({path: deletePath, headers: {Authorization:`Bearer ${bearerToken}`}});
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


    const response = await fetch(`https://api.flashcards.andrii.es${this.decksPath}`,
      {
        headers: headers,
        method: "POST",
        body:formData,
        credentials: "include",
      });
    return  response as any

  }

  async updateDeck(payload: {deckId: string, bearerToken?:string, name?:string, cover?: File | undefined, isPrivate?: boolean} ): Promise<IDeckBaseModel> {
    const updatePath = `${this.decksPath}/${payload.deckId}`
    const headers = {
      Authorization: payload.bearerToken ? `Bearer ${payload.bearerToken}` : '',
    }
    const formData = new FormData();

    appendFormData(formData,'name', payload.name);

    const res = await super.patch<IDeckBaseModel>({
      path: updatePath,
      body: formData,
      headers
    });
    return res as any
  }



}


















