import { createContext } from 'react';



type RouteDataContextType = {
  path: string,
  name: string,
}
export const RouteDataContext = createContext<RouteDataContextType | null>(null);

// export const useRouteData = () => useContext(RouteDataContext);