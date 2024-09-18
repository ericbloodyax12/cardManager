import {createContext, ReactNode, useContext} from 'react';
import {AuthStore} from "@/store/authStore/authStore";


// путь к вашему файлу с authStore

const storesContext = createContext<AuthStore|undefined>(undefined);

export const StoreProvider = ({children}: { children: ReactNode }) => {

    const authStore = new AuthStore()
    return (
        <storesContext.Provider value={authStore}>
            {children}
        </storesContext.Provider>
    )
}

export const useStores = () => useContext(storesContext);
