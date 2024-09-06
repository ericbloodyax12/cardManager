
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {useLocation, useNavigate} from "react-router-dom";
import s from '@/components/auth/checkEmail/check-email.module.scss'
import {Button} from "@/components/ui/button";
export const CheckEmailForm = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const email = location.state?.email || 'example@mail.com'
  return (
      <Card className={s.cardContainer}>
        <Typography variant={"h1"} className={s.header}>Check Email?</Typography>
          <img src='/src/components/assets/icons/svgIcon/checkEmail.svg'/>
          <div className={s.bodyContainer}>
            <Typography variant={"body2"} className={s.body}>
              {`We’ve sent an Email with instructions to`} <br className={s.bodyBr}/>
              {email}
            </Typography>
          </div>
          <div className={s.rememberPasswordContainer}>
            <Button className={s.checkButton} onClick={() => {
              navigate('/login')
            }}>Back to Sign In</Button>
          </div>

      </Card>
  )
}
