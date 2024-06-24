import {FC, PropsWithChildren} from 'react';

import s from "./mainLayoutWrapper.module.scss"
import {Outlet} from "react-router-dom";
import {AppHeader} from "@/components/ui/appHeader";

type TMainLayoutWrapperProps = PropsWithChildren<{
isAuth: boolean
}>;

export const MainLayoutWrapper: FC<TMainLayoutWrapperProps> = ({isAuth}) => {


  return (
      <div className={s["main-layout-container"]}>
        <div className={s["main-layout-container__header"]}>
          <AppHeader title={"Barsegyan&Co"} isAuth={isAuth} />
        </div>
        <div className={s["main-layout-container__content"]}>
          <Outlet context={2}/>
        </div>
      </div>
  );
}
