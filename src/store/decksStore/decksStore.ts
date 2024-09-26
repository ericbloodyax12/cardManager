import {makeAutoObservable} from "mobx";
import {DecksService} from "@/services/api/deck-service/decks-service";
import {DeckModelView} from "@/models-view/deck-view";
import {apiConfig} from "../../../configs/apiConfig";
import {IDeckBaseModel} from "@/dto/decks/decks-dto";


export class DecksStore {
    private _decksService: DecksService
    private _decks: DeckModelView[] = [];
    loading: boolean = false;
    error: string | null = null;

    private _userTokensUpdateCount: number = 0

    get UserTokensUpdateCount() {
        return this._userTokensUpdateCount
    }
    get decks(): DeckModelView[] {
        return this._decks;
    }
    private setDecks(decks: DeckModelView[]): void {
        this._decks = decks;
    }


    pagination = {
        currentPage: 1,
        itemsPerPage: 10,
        totalPages: 0,
        totalItems: 0,
    };

    constructor() {
        makeAutoObservable(this);
        this._decksService = new DecksService([], [], apiConfig.baseUrl)
    }


    async getDecks(page: number = this.pagination.currentPage,
                   itemsPerPage: number = this.pagination.itemsPerPage): Promise<DeckModelView[] | undefined> {
        try {
            const data = await this._decksService.getDecks(
                page,
                itemsPerPage
            );
            const decksView = DeckModelView.Map(data.items)
            this.setDecks(decksView)
            this.pagination = data.pagination;

            return decksView
        } catch (error: any) {
            this.error = error.message || 'Something went wrong';
            this.loading = false;
        }

    }

    async createDeck(name: string, bearerToken?: string, cover?: File): Promise<IDeckBaseModel | undefined> {

        try {
            const data = await this._decksService.createDeck(name)
            return data
        } catch (e: any) {
            this.error = e.message || 'Something went wrong';
        }
    }

    async deleteDeck(id: string, bearerToken?: string): Promise<IDeckBaseModel | undefined> {

        try {
            const deletedDeck = await this._decksService.deleteDeck(id)
            return deletedDeck

        } catch (e: any) {
            if (e.response?.status === 403) { //todo исправить сообщение об ошибке
                this.error = e.message;
            } else {
                this.error = e.message || 'Something went wrong';
            }
        }
    }

    async updateDeck(deckId: string, bearerToken?: string, name?: string, cover?: File | undefined, isPrivate?: boolean) {
        try {
            const updatedDeck = await this._decksService.updateDeck(
                deckId,
                name
            )
            return updatedDeck

        } catch (e: any) {
            this.error = e.message || 'Something went wrong';
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


