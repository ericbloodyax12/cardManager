import {authServices, TodosType} from "@/services/api/auth-services";
import {Dispatch, SetStateAction} from "react";
import {DecksTypeItem} from "@/services/api/authTypes";


export const authStore = {
  setAsyncTodos: async (setStateCallBack: Dispatch<SetStateAction<TodosType[]>>) => {
    const todos = await authServices.getTodos();
    setStateCallBack(todos);
  },
  setDecksState:(setStateCallBack: Dispatch<SetStateAction<DecksTypeItem[]>>) => {
    authServices.getDecks().then((data) => {
      setStateCallBack(data.items)
    })
  },
} as const


