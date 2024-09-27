import {makeAutoObservable} from "mobx";
import {DecksService} from "@/services/api/deck-service/decks-service";
import {AuthServices} from "@/services/api/auth-service/auth-services";
import {DeckModelView} from "@/models-view/deck-view";
import {apiConfig} from "../../../configs/apiConfig";
import {IDeckBaseModel} from "@/dto/decks/decks-dto";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";
import {IUserInfo, UserTokensInfoI} from "@/dto/auth/auth-dto";


export class DecksStore {
    private _decksService: DecksService;
    private _authService: AuthServices;
    private _decks: DeckModelView[] = [];
    private _userTokens: UserTokensInfoI | null | undefined = null
    loading: boolean = false;
    error: string | null = null;

    private _userTokensUpdateCount: number = 0

    get UserTokensUpdateCount() {
        return this._userTokensUpdateCount
    }
    get Decks(): DeckModelView[] {
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
        this._authService = new AuthServices([], [], apiConfig.baseUrl)
        const data = StorageHelper.getData<StorageTypeNames.UserToken>(StorageTypeNames.UserToken);
        if (data) {
            this._userTokens = data as UserTokensInfoI; // Явное приведение к типу
        }
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

    async deleteDeck(id: string, bearerToken: string, delitingDeckInfo: DeckModelView): Promise<IDeckBaseModel | undefined> {
        try {
            const currentUserData = await this._authService.getCurrentUserData(this._userTokens?.accessToken)

            if(currentUserData.id === delitingDeckInfo.author.id) {
                const deletedDeck = await this._decksService.deleteDeck(id, bearerToken)
                return deletedDeck
            } else {
                throw new Error("You can't delete decks that don't belong to you")
            }

        } catch (e: any) {
            if (e.response?.status === 403) { //todo исправить сообщение об ошибке
                this.error = e.message;
            } else {
                this.error = e.message || 'Something went wrong';
            }
        }
    }

    async updateDeck(payload: {deckId: string, name?: string, cover?: File | undefined, isPrivate?: boolean, bearerToken?: string}) {
        try {
            const updatedDeck = await this._decksService.updateDeck(payload)
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


