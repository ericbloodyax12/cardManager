import {FC} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainLayoutWrapper} from "@/pages/mainLayoutWrapper/mainLayoutWrapper";

import {PrivateRouteWrapper} from "@/routing/privateRouteWrapper";
import {routesConfig} from "@/routing/assets/Routes";

type TRouterWrapperProps = {

};

export const RouterWrapper: FC<TRouterWrapperProps> = () => {
  const isAuth = true
  const routes = routesConfig
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayoutWrapper/>}>
            {routes.map((route) => {
              if (route.private) {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<PrivateRouteWrapper isAuth={isAuth}/>}
                        >
                      <Route path={route.path} element={route.element} />
                    </Route>
                )
              }
              return <Route key={route.path} path={route.path} element={route.element} />;
            })}
            <Route path="*" element={isAuth ? <Navigate to="/" /> : <Navigate to="/login" />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
