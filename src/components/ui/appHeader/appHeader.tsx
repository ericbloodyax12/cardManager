import {Button} from "@/components/ui/button";
import s from './appHeader.module.scss';
import {Typography} from "@/components/ui/typography";
import {useLocation, useMatches, useNavigate} from "react-router-dom";
import {Avatar} from "@/components/assets/Avatar/avatar";
import {TButtonInfo} from "@/routing/routesList/Routes";
import {SwitchComponent} from "@/components/ui/switch/switch";


import {useStores} from "@/contexts/storeContext/storeContext";


type HeaderWithButtonProps = {
  title: string;
  isAuth: boolean;
  avatarUrl?: string;
};
export const AppHeader = ({title, isAuth, avatarUrl = ""}: HeaderWithButtonProps) => {
  const matchRoutes = useMatches();
  const {pathname: currentPathName} = useLocation();
  const navigate = useNavigate();
  const { authStore } = useStores()!

  const currentRouteInfo = matchRoutes.find(
      route => {
        return route.pathname === currentPathName
      }
  );

  const buttonInfo = currentRouteInfo?.handle as TButtonInfo;


  return (
      <header className={s.header}>
        <Typography variant={"large"}>{title}</Typography>
        <div className={s.AppHeader_divWrapper}>
          <SwitchComponent  />
          {
            (isAuth)
                ? <div className={s.AvatarContainer}>
                  <Typography className={s.avatarWrapper} variant={"subtitle1"}>as
                    <Avatar  initialImageUrl={avatarUrl} alt="User Avatar"/>
                    <Button onClick={() => {authStore?.logOut()}}>logout</Button>
                  </Typography>
                </div>
                : <Button
                    variant={"secondary"}
                    className={s.button}
                    onClick={(() => navigate(buttonInfo.navigateTo))}
                >
                  {buttonInfo?.buttonText}
                </Button>
          }
        </div>


      </header>
  )
}



