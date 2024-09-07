import {makeAutoObservable} from "mobx";
import {decksService} from "@/services/api/deck-service/decks-service";

class DecksStore {
    decks = [];
    loading = false;
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

    async getDecks() {
        this.loading = true;
        this.error = null;
        try {
            // const params = {
            //     currentPage: this.pagination.currentPage,
            //     itemsPerPage: this.pagination.itemsPerPage,
            // };
            const data = await decksService.getDecks();
                this.decks = data.items || [];
                // this.pagination = data.pagination;
                this.loading = false;

        } catch (error: any) {
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
