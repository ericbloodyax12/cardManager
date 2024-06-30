import {FC, ReactNode, useState,} from 'react';
import { RoutesDataContext } from '@/contexts/routeDataContext/routeDataContext';

type TRouteDataProviderProps = {
  children: ReactNode
  routesData: {
    name: string,
    path: string
  }[]
};

export const RouteDataProvider: FC<TRouteDataProviderProps> = ({routesData, children}) => {
  const [currentRouteData, setCurrentRouteData] = useState<{path: string, name: string} | undefined>(undefined)

  return (
      <RoutesDataContext.Provider value={{routesData,currentRouteData,setCurrentRouteData}}>
        {children}
      </RoutesDataContext.Provider>
  );
}
