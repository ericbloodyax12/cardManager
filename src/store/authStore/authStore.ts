import {getDecks, getTodos, TodosType} from "@/services/api/auth-services";
import {Dispatch, SetStateAction} from "react";
import {DecksTypeItem} from "@/services/api/authTypes";

export const setAsyncTodos = async (setStateCallBack: Dispatch<SetStateAction<TodosType[]>>) => {
  const todos = await getTodos();
  setStateCallBack(todos);
}
export const setDecksState = (setStateCallBack: Dispatch<SetStateAction<DecksTypeItem[]>>) => {
  getDecks().then((data) => {
    setStateCallBack(data.items)
  })
}

