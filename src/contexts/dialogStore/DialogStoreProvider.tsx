import {FC, ReactNode} from 'react';

import {DialogStore} from '@/store/dialogStore/dialogStore'
import {DialogContainer} from "@/contexts/dialogStore/DialogContainer";
import {DialogStoreContext} from './DialogStoreContext';

type TDialogsProviderProps = {
  children: ReactNode;
};

export const DialogStoreProvider: FC<TDialogsProviderProps> = ({children}) => {
  const dialogStore = new DialogStore();

  console.log('dialogStore', dialogStore)
  debugger
  return (
    <DialogStoreContext.Provider value={{
      dialogStore: dialogStore
    }}>
      {children}
     <DialogContainer dialogStore={dialogStore} />
    </DialogStoreContext.Provider>
  );
};
