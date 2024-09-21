import {makeAutoObservable} from "mobx";
import {DecksService} from "@/services/api/deck-service/decks-service";
import {DeckModelView} from "@/models-view/deck-view";
import {apiConfig} from "../../../configs/apiConfig";



export class DecksStore {
  private _decksService: DecksService
  decks: DeckModelView[] = [];
  loading: boolean = false;
  error: string | null = null;

  private _userTokensUpdateCount: number = 0
  get UserTokensUpdateCount() {
    return this._userTokensUpdateCount
  }

  pagination = {
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 0,
    totalItems: 0,
  };

  constructor() {
    makeAutoObservable(this);
    this._decksService = new DecksService([],[], apiConfig.baseUrl)
  }


  async getDecks(page: number = this.pagination.currentPage,
                 itemsPerPage: number = this.pagination.itemsPerPage): Promise<DeckModelView[] | undefined> {
    try {
      const data = await this._decksService.getDecks(
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


