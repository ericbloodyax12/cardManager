import {makeAutoObservable} from "mobx";
import {decksService} from "@/services/api/deck-service/decks-service";
import {DeckModelView} from "@/models-view/deck-view";


class DecksStore {
    decks: DeckModelView[] = [];
    loading: boolean = false;
    error: string | null = null;
    pagination = {
        currentPage: 1,
        itemsPerPage: 10,
        totalPages: 0,
        totalItems: 0,
    };

    constructor() {
        makeAutoObservable(this);
    }


    async getDecks(page: number = this.pagination.currentPage,
                   itemsPerPage: number = this.pagination.itemsPerPage): Promise<DeckModelView[] | undefined> {
        try {
            const data = await decksService.getDecks(
                page,
                itemsPerPage
            );
            const decksView = DeckModelView.Map(data.items)
            this.decks = decksView;
            this.pagination = data.pagination;

            return decksView
        } catch (error: any) {
            this.error = error.message || 'Something went wrong';
            this.loading = false;
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

export const decksStore = new DecksStore();
