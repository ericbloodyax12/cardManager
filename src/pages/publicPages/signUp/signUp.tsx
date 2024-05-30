import s from './sign-up.module.scss'
import {SignUpForm} from "@/components/auth/registation/signUpForm";
import {HeaderWithButton} from "@/components/ui/headers/headerWithButton";
export const SignUp = () => {
    return (
        <div className={s.signUpContainer}>
          <HeaderWithButton title={"Barsegyan&Co"}/>
          <SignUpForm />
        </div>
    );
}

