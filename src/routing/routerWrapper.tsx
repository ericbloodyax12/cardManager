// import React, {FC} from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {MainLayoutWrapper} from "@/pages/mainLayoutWrapper/mainLayoutWrapper";

import {PrivateRouteWrapper} from "@/routing/privateRouteWrapper";
import {routesConfig, paths} from "@/routing/routesList/Routes";
import {Decks} from "@/pages/decks";
import {SignIn} from "@/pages/publicPages/signIn/signIn";
import {ThemeProvider} from "@/contexts/themeContext/themeProvider";
import {observer} from "mobx-react-lite";
import {useStores} from "@/contexts/storeContext/storeContext";



export const RouterWrapper = observer(() => {
  const { authStore } = useStores()!
  const isAuth = authStore?.IsAuth


  const router = createBrowserRouter([
    {
      path: "/",
      handle: {buttonText: "Sign Up", navigateTo: paths.SIGN_UP},
      element:
          <ThemeProvider>
            <MainLayoutWrapper isAuth={isAuth ?? false}/>
          </ThemeProvider>,
      children: [
        ...routesConfig.map(route =>
          route.private
              ? {
            path: route.path,
                element:  <PrivateRouteWrapper isAuth={isAuth ?? false}/>,
                children: [
                  {
                    path: "", // Путь по умолчанию для приватного маршрута
                    element: route.element
                  }
                ]
              }
              : {
            path: route.path,
                handle: route.buttonInfo,
                element:  route.element
          }

        ),
        // Указываем маршрут по умолчанию
        {

          index: true,
          element: isAuth ? <Decks/> : <SignIn/>, // компонент, который будет отображаться по умолчанию
        }
      ],
    },
    {
      path: "*",
      element: isAuth ? <Navigate to="/"/> : <Navigate to={paths.SIGN_IN}/>,
    },
  ]);
  return (
      <RouterProvider router={router}/>
  );
})
