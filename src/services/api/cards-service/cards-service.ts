import {ApiService} from "@/services/api-service";
import {ICardsDataResponse} from "@/dto/cards/cards-dto";


export class CardsService extends ApiService {
    private decksPath: string = "/v1/decks/";
    private cardsPath: string = "/v1/cards/";

    async getCardsInDeck(id: string, bearerToken?: string): Promise<ICardsDataResponse> {
        const queryParams = id;
        const path = `${this.decksPath}`+ queryParams;
        const headers: { [key: string]: string } = bearerToken ? { Authorization: `Bearer ${bearerToken}` } : {};
        const res = await super.get<ICardsDataResponse>({
            path: path,
            headers: headers,
        });
        return res
    }
}