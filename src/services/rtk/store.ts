import { baseApi } from '@/services/rtk/base-api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  // getDefaultMiddleware стандартный Middleware в redux который необходимый, потому что у редакса под копотом мидлвайер для санок, а здесь мы делаем кокретно под наш api, а CreateApi под копотом в base api создает мидвайер
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, //помимо того что baseApi генерирует хуки он еще генерирует reducer
    //ключ желательно писать именно так [], потому что потом могут возникнуть ошибки, а в сторовское название должно совпадать с названием ключа выше
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
