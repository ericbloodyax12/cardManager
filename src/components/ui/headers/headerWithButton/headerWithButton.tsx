import {Button} from "@/components/ui/button";
import s from './headerWithButton.module.scss';
import {Typography} from "@/components/ui/typography";
import {useNavigate} from "react-router-dom";


type HeaderWithButtonProps = {
  title: string;
};
export const HeaderWithButton = ({ title }: HeaderWithButtonProps) => {
  //component has margin-bottom:30px on default
  const navigate = useNavigate();
  return (

            <header className={s.header}>
              <Typography variant={"large"} className={s.logo}>{title}</Typography>
              <Button variant={"secondary"} className={s.button} onClick={(()=> {navigate('/login')} )}>Sign In</Button>
            </header>

  )
}



