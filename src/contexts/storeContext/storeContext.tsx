import {createContext, ReactNode, useContext} from 'react';
import {authStore} from "@/store/authStore/authStore";
// путь к вашему файлу с authStore

const storesContext = createContext({
  authStore,
});

export const StoreProvider = ({children}: { children: ReactNode }) => (
    <storesContext.Provider value={{authStore}}>
      {children}
    </storesContext.Provider>
);

export const useStores = () => useContext(storesContext);
