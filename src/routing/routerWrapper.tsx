// import React, {FC} from 'react';
import { createBrowserRouter, Navigate,  RouterProvider } from "react-router-dom";
import {MainLayoutWrapper} from "@/pages/mainLayoutWrapper/mainLayoutWrapper";

import {PrivateRouteWrapper} from "@/routing/privateRouteWrapper";
import {routesConfig, SIGN_IN, SIGN_UP} from "@/routing/routesList/Routes";
import {Decks} from "@/pages/decks";
import {SignIn} from "@/pages/publicPages/signIn/signIn";
export const isAuth = false;

const router = createBrowserRouter([
  {
    path: "/",
    handle: {buttonText:"SignUp",  navigateTo:  SIGN_UP},
    element: <MainLayoutWrapper isAuth={isAuth}/>,
    children: [
      ...routesConfig.map(route => ({
        path: route.path,
        handle: route.buttonInfo,
        element: route.private ? <PrivateRouteWrapper isAuth={isAuth} /> : route.element,
      })),
      // Указываем маршрут по умолчанию
      {

        index: true,
        element: isAuth ? <Decks /> : <SignIn/>, // компонент, который будет отображаться по умолчанию
      }
    ],
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