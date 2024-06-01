import React, {FC} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Decks} from "@/pages/decks";
import {MainLayoutWrapper} from "@/pages/mainLayoutWrapper/mainLayoutWrapper";
import {LoginForm} from "@/components/auth/login/login-form";
import {SignIn} from "@/pages/publicPages/signIn/signIn";
import {ForgotPassword} from "@/pages/publicPages/forgotPassword/forgotPassword";
import {PrivateRouteWrapper} from "@/routing/privateRouteWrapper";

type TRouterWrapperProps = {

};

export const RouterWrapper: FC<TRouterWrapperProps> = (props) => {
  const isAuth = false
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayoutWrapper/>}>
            <Route path={'login'} element={<SignIn/>}/>
            <Route path={'forgot_password'} element={<ForgotPassword/>}/>

            <Route element={<PrivateRouteWrapper isAuth={isAuth}/>}>
              <Route index  element={<Decks/>}/>
              <Route path={'decks'} element={<Decks/>}/>

            </Route>
            <Route path="*" element={isAuth ? <Navigate to="/" /> : <Navigate to="/login" />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
