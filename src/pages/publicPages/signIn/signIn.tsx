import {LoginForm} from "@/components/auth/login/login-form";

import s from './signIn.module.scss'



export const SignIn = () => {


    return (
        <div className={s.loginContainer}>
            <LoginForm/>
        </div>

    )
}



