import  {FC} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {SIGN_IN} from "@/routing/routesList/Routes";

type TPrivateRouteWrapperProps = {
  isAuth: boolean;
};

export const PrivateRouteWrapper: FC<TPrivateRouteWrapperProps> = ({isAuth}) => {
  console.log(isAuth)
  return isAuth ? <Outlet/> : <Navigate to={SIGN_IN}/>;
}
