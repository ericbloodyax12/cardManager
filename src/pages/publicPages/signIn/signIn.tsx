import { useLocation} from 'react-router-dom';
import {LoginForm} from "@/components/auth/login/login-form";


import s from './signIn.module.scss'



export const SignIn = () => {

    const history = useLocation()
    console.log("useLocation",history)

    return (
        <div className={s.loginContainer}>
            <LoginForm/>
        </div>

    )
}



