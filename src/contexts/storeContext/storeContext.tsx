import {createContext, ReactNode, useContext, useMemo} from 'react';
import {AuthStore} from "@/store/authStore/authStore";
import {DecksStore} from "@/store/decksStore/decksStore";
import {CardsStore} from "@/store/cardsStore/cardsStore";


// путь к вашему файлу с authStore
type TStoreProviderContext = {
  authStore: AuthStore;
  decksStore: DecksStore;
  cardsStore: CardsStore;
}
const storesContext = createContext< TStoreProviderContext|undefined >(undefined);

export const StoreProvider = ({children}: { children: ReactNode }) => {

    const authStore = new AuthStore();
    const decksStore = new DecksStore();
    const cardsStore = new CardsStore();
    const cachedContextValue = useMemo(() => {
        return {
            authStore,
            decksStore,
            cardsStore
        }
    },[])

    return (
        <storesContext.Provider value={cachedContextValue}>
            {children}
        </storesContext.Provider>
    )
}

export const useStores = () => useContext(storesContext);
