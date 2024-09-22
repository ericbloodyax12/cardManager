import {FC, ReactNode } from 'react';
import {DialogStoreContext} from './DialogStoreContext';
import {DialogStore} from '@/store/dialogStore/dialogStore'

type TDialogsProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<TDialogsProviderProps> = ({children}) => {
  const dialogStore = new DialogStore();
  return (
    <DialogStoreContext.Provider value={{
      dialogStore: dialogStore
    }}>
      {children}
    </DialogStoreContext.Provider>
  );
}
