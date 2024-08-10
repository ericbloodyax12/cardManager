import {CreateUserResponseType} from "@/services/api/authTypes";
import {UserTokensInfoI} from "@/dto/auth/auth-dto";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";
import {makeAutoObservable} from "mobx";

class AuthStore {
  currentUserData: CreateUserResponseType | undefined = undefined;
  private _isAuth: boolean = false;
  private _userTokens: UserTokensInfoI | null = null
  constructor() {
    makeAutoObservable(this)
    const data = StorageHelper.getData<StorageTypeNames.UserToken>(StorageTypeNames.UserToken);

    if (data) {
      this._userTokens = data as UserTokensInfoI; // Явное приведение к типу
    }

  }

  // async setAuthState(setStateCallBack:  Dispatch<SetStateAction<boolean>>) {
  //   console.log(this.isAuth)
  //   this.isAuth
  //   const isAuthorized = !!isAuth.id
  //   setStateCallBack(isAuthorized)
  // }
  //
  get UserTokens() {
    return this._userTokens
  }

  get IsAuth() {
    if (this._userTokens?.accessToken) {
      this._isAuth = true
    } else {
      this._isAuth = false
    }
    return this._isAuth
  }

  public setUserTokens(userTokens: UserTokensInfoI | undefined) {
    StorageHelper.setData({name: StorageTypeNames.UserToken, data: userTokens})
    this._userTokens = userTokens
  }

  setIsAuth(isAuth: boolean) {
    this._isAuth = isAuth
  }

  logOut() {
    StorageHelper.remove(StorageTypeNames.UserToken)
    this._userTokens = null
  }


  // async createUser(email:string, password:string) {
  //   const userData = await authServices.postCreateUser(email, password)
  //   this.currentUserData = userData;
  // }

}

export const authStore = new AuthStore();



