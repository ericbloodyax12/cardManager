import {LoginForm} from "@/components/auth/login/login-form";

import s from './signIn.module.scss'
import {HeaderWithButton} from "@/components/ui/headers/headerWithButton";


export const SignIn = () => {
    return (
        <div className={s.loginContainer}>
          <HeaderWithButton title={"Barsegyan&Co"}/>
            <LoginForm/>
        </div>

    )
}



