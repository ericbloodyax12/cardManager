import {CreateUserResponseType} from "@/services/api/authTypes";
import {UserTokensInfoI} from "@/dto/auth/auth-dto";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";

class AuthStore {
  currentUserData: CreateUserResponseType | undefined = undefined;
  private _isAuth: boolean = false;
  private _userTokens: UserTokensInfoI | undefined = undefined

  constructor() {

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

  set IsAuth(isAuth: boolean) {
    this._isAuth = isAuth
  }

  // async createUser(email:string, password:string) {
  //   const userData = await authServices.postCreateUser(email, password)
  //   this.currentUserData = userData;
  // }

}

export const authStore = new AuthStore();


