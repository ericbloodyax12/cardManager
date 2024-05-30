
// import s from './testPage.module.scss'
//
// import {DropDownMenuComponent} from "@/components/ui/dropDownMenus/dropDownMenu";
import {HeaderWithButton} from "@/components/ui/headers/headerWithButton";

import {HeaderWithAvatar} from "@/components/ui/headers/headerWithAvatar";
import {DropDownMenuWithAvatarComponent} from "@/components/ui/dropDownMenus/dropDownMenuWithAvatar";


export const TestComponentsPage = () => {
  // const tabs = [
  //   { title: 'Apple' },
  //   { title: 'Juice' },
  //   { title: 'Lemon' },
  // ]

  return (
      <div>
      <HeaderWithButton title={"Barsegyan Group"}/>
        <HeaderWithAvatar title={"Barsegyan Group"} avatarUrl={""} />
        <DropDownMenuWithAvatarComponent/>

      </div>
  )
}