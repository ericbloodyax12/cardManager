// import { useGetDecksQuery } from '@/services/rtk/base-api'

import {TodosType} from "@/services/api/auth-services";
import {useEffect, useState} from "react";
import {setAsyncTodos} from "@/store/authStore/authStore";


export const Decks = () => {
  // const {data} = useGetDecksQuery()
  const [todos, setTodos] = useState<TodosType[]>([])
  useEffect(() => {
    setAsyncTodos(setTodos)
  }, []);
  return <div>
    deks
    <ul>
      {todos.map((t) => <li key={t.id}><b>{t.title}</b></li>)}
    </ul>

  </div>
}
