

import s from './createNewPasswordPage.module.scss'
import {HeaderWithButton} from "@/components/ui/headers/headerWithButton";
import {CreateNewPassword} from "@/components/auth/createNewPassword/createNewPassword";


export const CreateNewPasswordPage = () => {
    return (
        <div className={s.cNPContainer}>
          <HeaderWithButton title={"Barsegyan&Co"}/>
          <CreateNewPassword/>
        </div>

    )
}



