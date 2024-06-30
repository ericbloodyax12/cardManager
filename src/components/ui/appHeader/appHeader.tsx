import {Button} from "@/components/ui/button";
import s from './appHeader.module.scss';
import {Typography} from "@/components/ui/typography";
import {useLocation, useMatches, useNavigate} from "react-router-dom";
import {Avatar} from "@/components/assets/Avatar/avatar";
import {TButtonInfo} from "@/routing/routesList/Routes";






type HeaderWithButtonProps = {
  title: string;
  isAuth: boolean;
  avatarUrl?: string;
};
export const AppHeader = ({ title, isAuth, avatarUrl = "" }: HeaderWithButtonProps) => {
  const matchRoutes = useMatches();
  const {pathname: currentPathName} = useLocation();
  const navigate = useNavigate();

  const currentRouteInfo = matchRoutes.find(
    route => route.pathname === currentPathName
  );
  const buttonInfo = currentRouteInfo?.handle as TButtonInfo;



  return (
            <header className={s.header}>
              <Typography variant={"large"} className={s.logo}>{title}</Typography>
              {
                (isAuth)
                ?  <div className={s.AvatarContainer}>
                      <Typography  variant={"subtitle1"}>as</Typography>
                      <Avatar initialImageUrl={avatarUrl} alt="User Avatar" />

                    </div>
                : <Button
                    variant={"secondary"}
                    className={s.button}
                    onClick={(() => navigate(buttonInfo.navigateTo))}
                  >
                    {buttonInfo.buttonText}
                </Button>
              }
            </header>
  )
}



