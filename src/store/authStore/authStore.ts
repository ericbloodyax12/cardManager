import {CreateUserResponseType} from "@/services/api/authTypes";
import {UserTokensInfoI} from "@/dto/auth/auth-dto";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";
import {makeAutoObservable} from "mobx";
import {AuthServices} from "@/services/api/auth-services";
import {apiConfig} from "../../../configs/apiConfig";

export class AuthStore {
  currentUserData: CreateUserResponseType | undefined = undefined;
  private _isAuth: boolean = false;
  private _userTokens: UserTokensInfoI | null | undefined = null
  private _userTokensUpdateCount: number = 0
  private readonly _authService: AuthServices

  constructor() {
    makeAutoObservable(this)
      const authService = new AuthServices([this.SetTokensUpdateCount],[], apiConfig.baseUrl)
    const data = StorageHelper.getData<StorageTypeNames.UserToken>(StorageTypeNames.UserToken);
    this._authService = authService

    if (data) {
      this._userTokens = data as UserTokensInfoI; // Явное приведение к типу
    }

  }
    async SetTokensUpdateCount(response: Response, isHideErrorCallback?: (statusCode: number) => boolean){
        console.log("SetTokensUpdateCount",response,isHideErrorCallback)
    }
  // async setAuthState(setStateCallBack:  Dispatch<SetStateAction<boolean>>) {
  //   console.log(this.isAuth)
  //   this.isAuth
  //   const isAuthorized = !!isAuth.id
  //   setStateCallBack(isAuthorized)
  // }

  get UserTokens() {
    return this._userTokens
  }
  get AuthService() {
    return this._authService
  }
 get UserTokensUpdateCount() {
    return this._userTokensUpdateCount
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

  async signIn(email:string,password:string,rememberMe:boolean) {
      const userTokens= await this._authService.signIn(email,password,rememberMe)
      this.setUserTokens(userTokens)
  }


  async signUp(email: string, password: string) {
    try {
      await this._authService.signUp(email,password)
      this._isAuth = true;

    }
    catch (e: any) {
      const errorMessage = e.message
      console.error(errorMessage)
    }
  }

  async forgotPassword(email:string) {
    try {
      await this._authService.forgotPassword(email)
    }
    catch (e: any) {
      const errorMessage = e.message
      console.error(errorMessage)
    }
  }
  async resetPassword(id:string, password:string) {
    try {
      await this._authService.resetPassword(id,password)
    }
    catch (e: any) {
      const errorMessage = e.message
      console.error(errorMessage)
    }
  }

  // async createUser(email:string, password:string) {
  //   const userData = await authServices.postCreateUser(email, password)
  //   this.currentUserData = userData;
  // }
}





