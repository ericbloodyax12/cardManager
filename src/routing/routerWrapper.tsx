// import React, {FC} from 'react';
import { createBrowserRouter, Navigate,  RouterProvider } from "react-router-dom";
import {MainLayoutWrapper} from "@/pages/mainLayoutWrapper/mainLayoutWrapper";

import {PrivateRouteWrapper} from "@/routing/privateRouteWrapper";
import {routesConfig, SIGN_IN} from "@/routing/routesList/Routes";
export const isAuth = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutWrapper isAuth={false}/>,
    children: routesConfig.map(route => ({
      path: route.path,
      handle: route.buttonInfo,
      element: route.private ? <PrivateRouteWrapper isAuth={isAuth}/> : route.element,
    })),
  },
  {
    path: "*",
    element: isAuth ? <Navigate to="/"/> : <Navigate to={SIGN_IN}/>,
  },
]);

export const RouterWrapper = () => {
  return (
    <RouterProvider router={router} />
  );
}