
import s from './headerWithAvatar.module.scss';
import {Typography} from "@/components/ui/typography";
import {Avatar} from "@/components/assets/Avatar/avatar";



type HeaderWithButtonProps = {
  title: string;
  avatarUrl:string;
};
export const HeaderWithAvatar = ({ title, avatarUrl = "" }: HeaderWithButtonProps) => {

  return (

      <header className={s.header}>
        <Typography variant={"large"} className={s.logo}>{title}</Typography>
        <div className={s.AvatarContainer}>
          <Typography  variant={"subtitle1"}>as</Typography>
          <Avatar initialImageUrl={avatarUrl} alt="User Avatar" />

        </div>

      </header>

  )
}



