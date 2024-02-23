import {getTodos, TodosType} from "@/services/api/auth-services";
import {Dispatch, SetStateAction} from "react";

export const setAsyncTodos = async (setStateCallBack: Dispatch<SetStateAction<TodosType[]>>) => {
  const todos = await getTodos();
  setStateCallBack(todos);
}