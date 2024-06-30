import {Button} from "@/components/ui/button";
import s from './appHeader.module.scss';
import {Typography} from "@/components/ui/typography";
import {useLocation, useMatches, useNavigate} from "react-router-dom";
import {Avatar} from "@/components/assets/Avatar/avatar";
import {useRouteData} from "@/contexts/routeDataContext/routeDataContext";





type HeaderWithButtonProps = {
  title: string;
  isAuth: boolean;
  avatarUrl?: string;
};
export const AppHeader = ({ title, isAuth, avatarUrl = "" }: HeaderWithButtonProps) => {
  const data = useMatches()
  console.log(data)
  const {routesData, currentRouteData} = useRouteData()
  const location = useLocation();
  console.log('currentRouteData',currentRouteData)
  //component has margin-bottom:30px on default
  const navigate = useNavigate();
  const getButtonTextAndPath = (path: string) => {
    const route = routesData?.find((route) => route.path === path);
    if (route) {
      switch (route.path) {
        case '/login':
          return { text: 'Sign Up', path: '/sign_up' };
        default:
          return { text: 'Sign In', path: '/login' };
      }
    }
    return { text: 'Sign In', path: '/login' };
  };

  const buttonText = getButtonTextAndPath(location.pathname).text
  const buttonPath =  getButtonTextAndPath(location.pathname).path
  return (
            <header className={s.header}>
              <Typography variant={"large"} className={s.logo}>{title}</Typography>
              {
                (isAuth)
                ?  <div className={s.AvatarContainer}>
                      <Typography  variant={"subtitle1"}>as</Typography>
                      <Avatar initialImageUrl={avatarUrl} alt="User Avatar" />

                    </div>
                : <Button variant={"secondary"} className={s.button} onClick={(()=> {navigate(buttonPath)} )}>{buttonText}</Button>
              }
            </header>
  )
}



