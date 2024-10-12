import {FC, PropsWithChildren} from 'react';

import  "./mainLayoutWrapper.scss"
import {Outlet, useLocation} from "react-router-dom";
import {AppHeader} from "@/components/ui/appHeader";
import {useTheme} from "@/contexts/themeContext";

type TMainLayoutWrapperProps = PropsWithChildren<{
isAuth: boolean
}>;

export const MainLayoutWrapper: FC<TMainLayoutWrapperProps> = ({isAuth}) => {
  const { themeClassName } = useTheme();
    console.log("useLocation:",useLocation())
const mainLayoutContainerCN = [
    "main-layout-container",
    themeClassName,
].join(" ")

  return (
      <div className={mainLayoutContainerCN}>
        <div className={"main-layout-container__header"}>
          <AppHeader title={"Barsegyan&Co"} isAuth={isAuth} />
        </div>
        <div className={"main-layout-container__content"}>
          <Outlet />
        </div>
      </div>
  );
}
