import {LoginForm} from "@/components/auth/login/login-form";

import s from './signIn.module.scss'
import {RadioGroupComponent} from "@/components/ui/radioGroup";


export const SignIn = () => {
    return (
        <div className={s.loginContainer}>
            <LoginForm/>
            <RadioGroupComponent/>
        </div>

    )
}



