
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";

import '@/components/auth/checkEmail/check-email.scss'

export const CheckEmailForm = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const email = location.state?.email || 'example@mail.com'
  return (
      <Card className="cardContainer">
        <Typography variant={"h1"} className="header">Check Email?</Typography>
          <img src='/src/components/assets/icons/svgIcon/checkEmail.svg'/>
          <div className="bodyContainer">
            <Typography variant={"body2"} className="body">
              {`We’ve sent an Email with instructions to`} <br className="bodyBr"/>
              {email}
            </Typography>
          </div>
          <div className="rememberPasswordContainer">
            <Button className="checkButton" onClick={() => {
              navigate('/login')
            }}>Back to Sign In</Button>
          </div>

      </Card>
  )
}
