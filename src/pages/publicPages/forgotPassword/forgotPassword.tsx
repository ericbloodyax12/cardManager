import s from './forgot-password.module.scss'
import {ForgotPasswordForm} from "@/components/auth/forgotPassword/forgotPasswordForm";
import {HeaderWithButton} from "@/components/ui/headers/headerWithButton";
export const ForgotPassword = () => {
    return (
        <div className={s.forgotPasswordContainer}>
          <HeaderWithButton title={"Barsegyan&Co"}/>
            <ForgotPasswordForm />
        </div>
    );
}