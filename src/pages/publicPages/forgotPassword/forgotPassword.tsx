import s from './forgot-password.module.scss'
import {ForgotPasswordForm} from "@/components/auth/forgotPassword/forgotPasswordForm";

export const ForgotPassword = () => {
    return (
        <div className={s.forgotPasswordContainer}>

            <ForgotPasswordForm />
        </div>
    );
}