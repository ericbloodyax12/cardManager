import {Button} from "@/components/ui/button";
import s from './headerWithButton.module.scss';
import {Typography} from "@/components/ui/typography";


type HeaderWithButtonProps = {
  title: string;
};
export const HeaderWithButton = ({ title }: HeaderWithButtonProps) => {

  return (

            <header className={s.header}>
              <Typography variant={"large"} className={s.logo}>{title}</Typography>
              <Button variant={"secondary"} className={s.button}>Sign In</Button>
            </header>

  )
}



