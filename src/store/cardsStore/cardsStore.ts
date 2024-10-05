import {makeAutoObservable} from "mobx";
import {CardModelView} from "@/models-view/cards-view";
import {CardsService} from "@/services/api/cards-service/cards-service";
import {apiConfig} from "../../../configs/apiConfig";


export class CardsStore {
 private _cardsService: CardsService;
 private _cards: CardModelView[] = [];


    get Cards(): CardModelView[] {
        return this._cards;
    }
    private setCards(cards: CardModelView[]): void {
        this._cards = cards;
    }

    pagination = {
        currentPage: 1,
        itemsPerPage: 10,
        totalPages: 0,
        totalItems: 0,
    };

    constructor() {
        makeAutoObservable(this);
        this._cardsService = new CardsService([],[], apiConfig.baseUrl)
    }

    async getCards(id: string, bearerToken?: string): Promise<CardModelView[] | undefined> {
        try {
            const data = await this._cardsService.getCardsInDeck(id)
            const cardsView = CardModelView.Map(data.items)
            this.setCards(cardsView)
            this.pagination = data.pagination;
            return cardsView

        }
        catch (error: any) {
            error = error.message || 'Something went wrong';
        }
    }

    setPage(page: number) {
        this.pagination.currentPage = page;
    }

    setItemsPerPage(itemsPerPage: number) {
        this.pagination.itemsPerPage = itemsPerPage;
        // this.getDecks(this.pagination.currentPage, itemsPerPage);
    }

}