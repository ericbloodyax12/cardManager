import {FC, PropsWithChildren} from 'react';

import s from "./mainLayoutWrapper.module.scss"
import {HeaderWithButton} from "@/components/ui/headers/headerWithButton";
import {Outlet} from "react-router-dom";

type TMainLayoutWrapperProps = PropsWithChildren<{

}>;

export const MainLayoutWrapper: FC<TMainLayoutWrapperProps> = ({}) => {
  return (
      <div className={s["main-layout-container"]}>
        <div className={s["main-layout-container__header"]}>
          <HeaderWithButton title={"Barsegyan&Co"}/>
        </div>
        <div className={s["main-layout-container__content"]}>
          <Outlet/>
        </div>
      </div>
  );
}
