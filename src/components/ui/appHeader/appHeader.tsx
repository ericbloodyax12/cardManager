import {Button} from "@/components/ui/button";
import s from './appHeader.module.scss';
import {Typography} from "@/components/ui/typography";
import {useLocation, useNavigate} from "react-router-dom";
import {Avatar} from "@/components/assets/Avatar/avatar";




type HeaderWithButtonProps = {
  title: string;
  isAuth: boolean;
  avatarUrl?: string;
};
export const AppHeader = ({ title, isAuth, avatarUrl = "" }: HeaderWithButtonProps) => {
  // const useRouteData = useContext(RouteDataContext)
  const location = useLocation();
  // console.log(useRouteData)

  //component has margin-bottom:30px on default
  const navigate = useNavigate();
  const buttonText = (location.pathname === "/login") ? "Sign Up" : "Sign In"
  const buttonPath = (location.pathname === "/login") ? "/sign_up" : "/login"
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



