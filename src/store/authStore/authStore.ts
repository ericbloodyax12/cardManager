import {authServices, TodosType} from "@/services/api/auth-services";
import {Dispatch, SetStateAction} from "react";
import {CreateUserResponseType, DecksTypeItem} from "@/services/api/authTypes";


export const authStore = {
  setAsyncTodos: async (setStateCallBack: Dispatch<SetStateAction<TodosType[]>>) => {
    const todos = await authServices.getTodos();
    setStateCallBack(todos);
  },
  setDecksState: (setStateCallBack: Dispatch<SetStateAction<DecksTypeItem[]>>) => {
    authServices.getDecks().then((data) => {
      setStateCallBack(data.items)
    })
  },
  setAuthState: async (setStateCallBack:  Dispatch<SetStateAction<boolean>>) => {
    const isAuth = await authServices.getIsAuth();
    const isAuthorized = !!isAuth.id
    setStateCallBack(isAuthorized)
    console.log('store isAuth',isAuthorized)
  },
  createUser: async (email:string, password:string): Promise<CreateUserResponseType> => {
    const userData = await authServices.postCreateUser(email, password)
    return userData
  },
} as const


