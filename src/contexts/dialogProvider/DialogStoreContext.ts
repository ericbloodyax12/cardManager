import {createContext, useContext} from "react";

import {DialogStore} from "@/store/dialogStore/dialogStore";

type TDialogStoreContext = {
  dialogStore: DialogStore;
}
export const DialogStoreContext = createContext<TDialogStoreContext | null>(null);

export const useDialogs = () => {
  const context = useContext(DialogStoreContext);
  if( context === null ) {
    throw new Error('Требуется обернуть в провайдер DialogStoreProvider')
  } else {
    return context;
  }
}