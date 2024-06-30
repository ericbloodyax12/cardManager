import {createContext, Dispatch, SetStateAction, useContext} from 'react';




type RoutesDataContextType = {
  routesData: {path: string, name: string}[];
  currentRouteData: {path: string, name: string} | undefined;
  setCurrentRouteData: Dispatch<SetStateAction<{path: string, name: string} | undefined>>;
}
//@ts-ignore
export const RoutesDataContext = createContext<RoutesDataContextType >(undefined);
 export const useRouteData = () => useContext(RoutesDataContext);