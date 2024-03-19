import {authServices} from "@/services/api/auth-services";
import {Dispatch, SetStateAction} from "react";
import {CreateUserResponseType} from "@/services/api/authTypes";

class AuthStore {
  currentUserData: CreateUserResponseType | undefined = undefined;
  constructor() {
  }
  async setAuthState(setStateCallBack:  Dispatch<SetStateAction<boolean>>) {
    const isAuth = await authServices.getIsAuth();
    const isAuthorized = !!isAuth.id
    setStateCallBack(isAuthorized)
  }
  async createUser(email:string, password:string) {
    const userData = await authServices.postCreateUser(email, password)
    this.currentUserData = userData;
  }

}
export const authStore = new AuthStore();


