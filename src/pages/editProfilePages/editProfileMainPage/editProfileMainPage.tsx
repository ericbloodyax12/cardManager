import {EditProfileMain} from "@/components/editProfile/editProfileMain/editProfileMain";
import {StorageHelper, StorageTypeNames} from "@/helpers/storage-helper";

import './editProfileMainPage.scss'

export type EditProfilePagePropsType = {

}
export const EditProfileMainPage = ({}:EditProfilePagePropsType ) => {

    const userData = StorageHelper.getData(StorageTypeNames.UserInfoData)

    const name = userData?.name || "Noname";
    const email = userData?.email || "email@example.com";

  return (
      <div className="editProfileMainPageContainer">
        <EditProfileMain name={name} email={email}/>
      </div>
  );
}