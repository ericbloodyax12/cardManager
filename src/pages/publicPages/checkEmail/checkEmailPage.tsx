import {CheckEmailForm} from "@/components/auth/checkEmail/checkEmail";
import s from './check-email-page.module.scss'
import {HeaderWithButton} from "@/components/ui/headers/headerWithButton";

export const CheckEmail = () => {
  return (
      <div className={s.checkEmailPageContainer}>
        <HeaderWithButton title={"Barsegyan&Co"}/>
        <CheckEmailForm />
      </div>
  );
}