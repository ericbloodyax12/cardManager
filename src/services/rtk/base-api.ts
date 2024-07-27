import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {GetDecksResponse} from "@/services/rtk/types/flashcards.types";
import {GetCurrentUserDataResponse} from "@/services/rtk/types/auth.types";

// import идет именно '@reduxjs/toolkit/query/react' это важно, rtk query не специфичен для react (и redux и rtk можно использовать с любым фреймворком) но для реакта есть специальные хуки, чтобы ими воспользоваться нужно ипортировать именно так, иначе будут ошибки

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseQuery - специальный уровень, специальная настройка, можно рассматривать как instance axios, его можно сделать вообще кастомным. Все что нам нужно делать это использовать данную структуру где в baseQuery мы передаем результат вызова fetchBaseQuery
    // в fetchBaseQuery (функция-хелпер) мы передаем объект, у него достаточно много параметров, это как раз то что мы делаем и в axios
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include', // потому что будут авторизационные токены в куках
    prepareHeaders: headers => {
      //специальный метод который будет выполняться на каждом запросе и он цепляет специальный header ('x-auth-skip', 'true'), позволяет получать доступ к api без авторизации, это чисто для упрощения на первых парах чтобы у нас на данный момент был доступ к запросам на бэк (тестовый ак, на котором бэк будет видеть что мы авторизованы)
      headers.append('x-auth-skip', 'false') // append - добавить
    }, // это все то, что будет происходить при каждом нашем запросе, уровень baseQuery который будет использоваться с помощью данной api, вообще api- шек у нас может быть несколько, но тк мы подключаемся к одной то будет 1
  }),
  endpoints: builder => {
    // здесь происходит описание наших endpoints, по факту мы здесь передаем коллбэк и получаем builder (фабричный метод)
    return {
      //берем builder и внизу возвращаем {} где в качестве ключа б название endpoint а в качестве знач builder.query принимает дженерик <>
      getDecks: builder.query<GetDecksResponse, void>({
        // у builder есть 2 метода query и mutation: query это запросы по типу get, mutation это post put delete patch, первый дженерик это возвращаемый тип нашего endpoint, вторым параметром будут наши аргументы, то что мы будем передавать в хук
        query: () => 'v1/decks',
        // здесь надо передать еще 1 {} принимает (сюда придут параметры) => {здесь возвращаем config, м б {} или 'строкой'}, если строка то просто урл, если объект то будет несколько параметров 1 из которых урл, у нас доп параметров нет поэтому просто урл
      }),
      getAuth: builder.query<GetCurrentUserDataResponse ,void>({
        query: () => 'v1/auth/me'

      })
    }
  },
  reducerPath: 'baseApi', // тот путь по которому будет находиться reducer
})
// в конце концов в baseApi уже возвращаются хуки, здесь происходит магия вне Хогвартса, точнее под капотом
export const { useGetDecksQuery, useGetAuthQuery, useLazyGetDecksQuery } = baseApi

// use + название endpoint + Query
