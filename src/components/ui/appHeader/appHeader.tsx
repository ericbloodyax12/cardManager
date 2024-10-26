import {Button} from "@/components/ui/button";
import {Typography} from "@/components/ui/typography";
import {useLocation, useMatches, useNavigate} from "react-router-dom";
import {Avatar} from "@/components/assets/Avatar/avatar";
import {TButtonInfo} from "@/routing/routesList/Routes";
import {SwitchComponent} from "@/components/ui/switch/switch";
import {useStores} from "@/contexts/storeContext/storeContext";

import './appHeader.scss';


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
      <header className={"header"}>
        <Typography variant={"large"}>{title}</Typography>
        <div className={"AppHeader_divWrapper"}>
          <SwitchComponent  />
          {
            (isAuth)
                ? <div className={"AvatarContainer"}>
                  <Typography className={"avatarWrapper"} variant={"subtitle1"}>as

                  </Typography>
                    <Avatar  initialImageUrl={avatarUrl} alt="User Avatar"/>
                    <Button onClick={() => {authStore?.logOut()}}>logout</Button>
                </div>
                : <Button
                    variant={"secondary"}
                    className={"button"}
                    onClick={(() => navigate(buttonInfo.navigateTo))}
                >
                  {buttonInfo?.buttonText}
                </Button>
          }
        </div>


      </header>
  )
}



