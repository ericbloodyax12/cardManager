import {FC} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainLayoutWrapper} from "@/pages/mainLayoutWrapper/mainLayoutWrapper";

import {PrivateRouteWrapper} from "@/routing/privateRouteWrapper";
import {routesConfig} from "@/routing/routesList/Routes";


type TRouterWrapperProps = {};
export const isAuth = false
export const RouterWrapper: FC<TRouterWrapperProps> = () => {

  const routes = routesConfig

  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={

            <MainLayoutWrapper isAuth={isAuth}/>}>
            {routes.map((route) => {
              if (route.private) {
                return (
                    <Route

                        key={route.path}
                        path={route.path}
                        element={
                          // <RouteDataContext.Provider value={{path: route.path, name: route.name}}>
                            <PrivateRouteWrapper isAuth={isAuth}/>
                          // </RouteDataContext.Provider>
                        }
                    >
                      <Route path={route.path} element={route.element}/>
                    </Route>
                )
              }
              return <Route key={route.path} path={route.path} element={route.element}/>;
            })}
            <Route path="*" element={isAuth ? <Navigate to="/"/> : <Navigate to="/login"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
