import {FC, PropsWithChildren} from 'react';

import s from "./mainLayoutWrapper.module.scss"
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
    s["main-layout-container"],
    s[themeClassName],
].join(" ")

  return (
      <div className={mainLayoutContainerCN}>
        <div className={s["main-layout-container__header"]}>
          <AppHeader title={"Barsegyan&Co"} isAuth={isAuth} />
        </div>
        <div className={s["main-layout-container__content"]}>
          <Outlet />
        </div>
      </div>
  );
}
