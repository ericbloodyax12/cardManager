import s from './sign-up.module.scss'
import {SignUpForm} from "@/components/auth/registation/signUpForm";
export const SignUp = () => {
    return (
        <div className={s.signUpContainer}>
          <SignUpForm />
        </div>
    );
}

