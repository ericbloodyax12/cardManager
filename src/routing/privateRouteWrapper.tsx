import  {FC} from 'react';
import {Navigate, Outlet} from "react-router-dom";

type TPrivateRouteWrapperProps = {
  isAuth: boolean;
};

export const PrivateRouteWrapper: FC<TPrivateRouteWrapperProps> = ({isAuth}) => {
  return isAuth ? <Outlet/> : <Navigate to={'/login'}/>;
}
