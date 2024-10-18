import {ApiService} from "@/services/api-service";
import {ICardBaseModel, ICardsDataResponse} from "@/dto/cards/cards-dto";
import {appendFormData} from "@/services/servicesHelpers/appendFormData";


export class CardsService extends ApiService {
    private decksPath: string = "/v1/decks/";
    private cardsPath: string = "/cards";

    async getCardsInDeck(id: string, bearerToken?: string): Promise<ICardsDataResponse> {
        const queryParams = id;
        const path = this.decksPath + queryParams + this.cardsPath;
        const headers: { [key: string]: string } = bearerToken ? {Authorization: `Bearer ${bearerToken}`} : {};
        const res = await super.get<ICardsDataResponse>({
            path: path,
            headers: headers,
        });
        return res
    }

    async createCard(payload: {
        deckId: string,
        question: string,
        answer: string,
        bearerToken?: string
    }): Promise<ICardBaseModel> {
        const addingPath = `${this.decksPath}${payload.deckId}${this.cardsPath}`

        const formData = new FormData();

        appendFormData(formData, 'question', payload.question);
        appendFormData(formData, 'answer', payload.answer);

        const res = await super.post<ICardBaseModel>({
            path: addingPath,
            body: formData,

        });
        return res as any
    }

    async deleteCard(cardId: string): Promise<void> {
        const path = `/v1${this.cardsPath}/${cardId}`;
         await super.delete<void>({
            path
        });
    }

}