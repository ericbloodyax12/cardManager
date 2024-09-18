import {makeAutoObservable} from "mobx";
import {DecksService} from "@/services/api/deck-service/decks-service";
import {DeckModelView} from "@/models-view/deck-view";
import {apiConfig} from "../../../configs/apiConfig";
import {StatusCodes} from "http-status-codes/build/cjs/status-codes";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";
import {toast} from "react-toastify";
import {AuthServices} from "@/services/api/auth-services";


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

  constructor(private _authService: AuthServices) {
    makeAutoObservable(this);
    this._decksService = new DecksService([this.SetTokensUpdateCount],[], apiConfig.baseUrl)
  }

  async SetTokensUpdateCount(response: Response, isHideErrorCallback?: (statusCode: number) => boolean){
    console.log("SetTokensUpdateCount",response,isHideErrorCallback)

    if (response.status === StatusCodes.UNAUTHORIZED) {


      const tokens = StorageHelper.getData(StorageTypeNames.UserToken)
      console.log("UnauthorizedProcessingCookiesBehaviorrr");
      console.log('перед проверкой токенов');

      if (tokens) {
        console.log("here2")
        debugger
        try {
          // Если токены есть, пытаемся обновить их
          const newTokens = await this._authService.refreshAccessToken();

          this._authService.updateUserTokens(newTokens); // сохраняем новые токены
           this._userTokensUpdateCount += 1;

        } catch (refreshError) {
          // Если обновление токенов не удалось (например, refreshToken просрочен), перенаправляем на страницу логина
          // this.goToLogin();
        }
      } else {
        if (isHideErrorCallback && !isHideErrorCallback(response.status)) {
          toast.warning("Ошибка авторизации");
        }
        // StorageHelper.remove(StorageTypeNames.User);
        // this.goToLogin();
      }

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


