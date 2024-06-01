// import { useGetDecksQuery } from '@/services/rtk/base-api'


import {useEffect, useState} from "react";
import {DecksTypeItem} from "@/services/api/authTypes";
import {authStore} from "@/store/authStore/authStore";




export const Decks = () => {
  // const {data} = useGetDecksQuery()
  // const [decks, setDecks] = useState<DecksTypeItem[]>([])
  // useEffect(() => {
  //   authStore.setDecksState(setDecks)
  // }, []);

  return <div>
    Deks
    {/*<ul>*/}
    {/*  {decks.map((d) => <li key={d.id}><b>{d.name}</b></li>)}*/}
    {/*</ul>*/}

  </div>
}
