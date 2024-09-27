import {ApiService} from "@/services/api-service";
import {IUserInfo, UserTokensInfoI} from "@/dto/auth/auth-dto";

import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";
import {RequestBehavior, ResponceBehavior} from "@/services/types";


export class AuthServices extends ApiService {
 constructor( responseBehaviors: ResponceBehavior[], requestBehaviors: RequestBehavior[],ApiUrl: string) {

   super(responseBehaviors,requestBehaviors,ApiUrl);
 }
  async getCurrentUserData(bearerToken?: string): Promise<IUserInfo> {
    const authPath = '/v1/auth/me'
      return await super.get({path: authPath, headers: {Authorization:`Bearer ${bearerToken}`}} )
  }
  async refreshAccessToken(): Promise<UserTokensInfoI> {
    const refreshToken = StorageHelper.getData(StorageTypeNames.UserToken);

    if (!refreshToken) {
      throw new Error("Refresh token missing");
    }
    const refreshTokenPath = '/v2/auth/refresh-token';
    const refreshedToken = await super.post<UserTokensInfoI>({
          path: refreshTokenPath,
          headers: {Authorization:`Bearer ${refreshToken.refreshToken}`}
    }
    )
    // await this.getIsAuth(refreshedToken.accessToken);
    return refreshedToken
  }

  public updateUserTokens(userTokens: UserTokensInfoI) {
    StorageHelper.setData({name:StorageTypeNames.UserToken, data:userTokens})
  }

  async signUp(email: string, password: string): Promise<void> {
    const signUpPath = '/v1/auth/sign-up'
    const body = {email, password}

    await super.post({path: signUpPath, body: body})
  }
  async forgotPassword(email: string): Promise<void> {
    const forgotPasswordPath = '/v1/auth/recover-password'
    const body = {email}
    await super.post({path: forgotPasswordPath, body: body})
  }
  async resetPassword(id:string, password: string): Promise<void> {
    const resetPasswordPath = `/v1/auth/reset-password/${id}`
    const body = {password}
    await super.post({path: resetPasswordPath, body: body})
  }
  async signIn(email: string, password: string, rememberMe: boolean): Promise<UserTokensInfoI> {
    const signInPath = '/v1/auth/login'
    const body = {email, password,rememberMe}
      console.log("in auth service request for signIn ", body)
   return await super.post({path: signInPath, body})
  }

} //как сделать аналог as const для классов







