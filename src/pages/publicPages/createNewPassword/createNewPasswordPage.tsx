

import s from './createNewPasswordPage.module.scss'
import {CreateNewPassword} from "@/components/auth/createNewPassword/createNewPassword";


export const CreateNewPasswordPage = () => {
    return (
        <div className={s.cNPContainer}>

          <CreateNewPassword/>
        </div>

    )
}



