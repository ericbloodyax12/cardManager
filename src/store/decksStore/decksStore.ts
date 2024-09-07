import {makeAutoObservable} from "mobx";
import {decksService} from "@/services/api/deck-service/decks-service";
import {DeckModelView} from "@/models-view/deck-view";



class DecksStore {
    decks: DeckModelView[] = [];
    loading: boolean = false;
    error: string | null = null;
    // pagination = {
    //     currentPage: 1,
    //     itemsPerPage: 10,
    //     totalPages: 1,
    //     totalItems: 0,
    // };
    constructor() {
        makeAutoObservable(this);
    }

    async getDecks(): Promise<DeckModelView[] | undefined> {
        this.loading = true;
        this.error = null;
        try {
            // const params = {
            //     currentPage: this.pagination.currentPage,
            //     itemsPerPage: this.pagination.itemsPerPage,
            // };
            const data = await decksService.getDecks();
            const decksView = DeckModelView.Map(data.items)
                this.decks = decksView;
                // this.pagination = data.pagination;
                this.loading = false;
            return decksView
        }
        catch (error: any) {
                this.error = error.message || 'Something went wrong';
                this.loading = false;
        }

    }
    // setPage(page) {
    //     this.pagination.currentPage = page;
    //     this.getDecks();
    // }
}

export const decksStore = new DecksStore();
