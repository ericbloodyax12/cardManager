import {makeAutoObservable} from "mobx";
import {CardModelView} from "@/models-view/cards-view";
import {CardsService} from "@/services/api/cards-service/cards-service";
import {apiConfig} from "../../../configs/apiConfig";
import {toast} from "react-toastify";
import {IUserInfo} from "@/dto/auth/auth-dto";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";
import {DeckModelView} from "@/models-view/deck-view";


export class CardsStore {
    private _cardsService: CardsService;
    private _cards: CardModelView[] = [];
    private _userDataInfo: IUserInfo | undefined = undefined;


    get Cards(): CardModelView[] {
        return this._cards;
    }
    private setCards(cards: CardModelView[]): void {
        this._cards = cards;
    }

    public setUserInfoData(userInfoData: IUserInfo){
        StorageHelper.setData({name:StorageTypeNames.UserInfoData, data: userInfoData});
        this._userDataInfo = userInfoData;
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

        const userInfoData = StorageHelper.getData<StorageTypeNames.UserInfoData>(StorageTypeNames.UserInfoData);
        if (userInfoData) {
            this._userDataInfo = userInfoData;
        }
    }

    async getCards(id: string, bearerToken?: string): Promise<CardModelView[] | undefined> {
        console.log(bearerToken)
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
    async deleteCard(id: string): Promise<void> {
        try {
           await this._cardsService.deleteCard(id)
            toast.success("card deleted successfully");
        }
        catch (error: any) {
            error = error.message || 'Something went wrong';
        }
    }

    async addNewCard(payload: {
        deckId: string,
        question: string,
        answer: string,
        bearerToken?: string,
        updatingDeckInfo: DeckModelView
    }) {
        if (this._userDataInfo?.id === payload.updatingDeckInfo.author.id) {
            try {
                const addCard = await this._cardsService.createCard(payload)
                toast.success("card added successfully");
                return addCard

            } catch (e: any) {
                 e.message || 'Something went wrong';
            }

        } else {
            toast.warn("You can't add card that deck don't belong to you")
        }
    }
    async updateCard(payload: {
        cardId: string,
        question?: string,
        answer?: string,
    }) {
            try {
                const updatedCard = await this._cardsService.updateCard(payload)
                toast.success("card updated successfully");
                return updatedCard

            } catch (e: any) {
                 e.message || 'Something went wrong';
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