import {FC, PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom";
import {AppHeader} from "@/components/ui/appHeader";
import {useTheme} from "@/contexts/themeContext";

import  "./mainLayoutWrapper.scss"
import {Footer} from "@/components/footer/footer";

type TMainLayoutWrapperProps = PropsWithChildren<{
isAuth: boolean
}>;

export const MainLayoutWrapper: FC<TMainLayoutWrapperProps> = ({isAuth}) => {
  const { themeClassName } = useTheme();
const mainLayoutContainerCN = [
    "main-layout-container",
    themeClassName,
].join(" ")

  return (
      <div className={mainLayoutContainerCN}>
        <div className={"main-layout-container__header"}>
          <AppHeader title={"Barsegyan&Co"} isAuth={isAuth}/>
        </div>
        <div className={"main-layout-container__content"}>
          <Outlet/>
        </div>
        <div className={"main-layout-container__footer"}>
          <Footer/>
        </div>

      </div>
  );
}
