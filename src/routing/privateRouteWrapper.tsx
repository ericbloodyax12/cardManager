import  {FC} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {paths} from "@/routing/routesList/Routes";

type TPrivateRouteWrapperProps = {
  isAuth: boolean;
};

export const PrivateRouteWrapper: FC<TPrivateRouteWrapperProps> = ({isAuth}) => {

  return isAuth ? <Outlet/> : <Navigate to={paths.SIGN_IN}/>;
}
