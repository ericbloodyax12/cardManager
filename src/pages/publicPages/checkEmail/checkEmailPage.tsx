import {CheckEmailForm} from "@/components/auth/checkEmail/checkEmail";
import s from './check-email-page.module.scss'

export const CheckEmail = () => {
  return (
      <div className={s.checkEmailPageContainer}>
        <CheckEmailForm />
      </div>
  );
}