
import {SignUpForm} from "@/components/auth/registation/signUpForm";

import s from './sign-up.module.scss'
export const SignUp = () => {
    return (
        <div className={s.signUpContainer}>
          <SignUpForm />
        </div>
    );
}

