

import {HeaderWithButton} from "@/components/ui/headers/headerWithButton";
import s from './editProfileMainPage.module.scss'
import {EditProfileMain} from "@/components/editProfile/editProfileMain/editProfileMain";

export type EditProfilePagePropsType = {
  name: string;
  email: string
}
export const EditProfileMainPage = ({name = "Eric",email = "as@gmail.com"}:EditProfilePagePropsType ) => {
  return (
      <div className={s.editProfileMainPageContainer}>
        <HeaderWithButton title={"Barsegyan&Co"}/>
        <EditProfileMain name={name} email={email}/>
      </div>
  );
}