
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import image010 from '../../../assets/images/010.jpg'



import {CheckIcon} from "@/components/assets/icons/componentSvg/check";
import {SelectDownIcon} from "@/components/assets/icons/componentSvg/selectDownIcon";
import {MyProfile} from "@/components/assets/icons/componentSvg/dropDownMenu/myProfile";
import {LogoutWhite} from "@/components/assets/icons/componentSvg/dropDownMenu/logoutWhite";

import s from './dropDownMenuWithAvatar.module.scss';
import {Avatar} from "@/components/assets/Avatar/avatar";
import {Typography} from "@/components/ui/typography";


export type DropDownMenuWithAvatarComponentProps = {
  email?:string
}
export const DropDownMenuWithAvatarComponent = ({email = "as@gmail.com"}:DropDownMenuWithAvatarComponentProps) => {


  return (
      <div className={s.dropDownMenuContainer}>
            <DropdownMenu.Root>

              <DropdownMenu.Trigger asChild>
                <button className={s.IconButton} aria-label="Customise options">
                  <img className={s.staticAvatar} src={image010}/>
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>

                    <DropdownMenu.Item className={s.DropdownMenuItem}>
                    <Avatar initialImageUrl={image010}/>
                    <div className={s.AvatarLabel}>
                      <Typography>
                        Barsegyan Group
                      </Typography>
                      {email}
                    </div>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className={s.DropdownMenuSeparator} /> {/* просто линия - перегородка */}

                  <DropdownMenu.CheckboxItem
                      className={s.DropdownMenuCheckboxItem}
                  > {/* внутри item можно установить checked и onCheckedChange */}
                    <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
                      <CheckIcon />
                    </DropdownMenu.ItemIndicator>
                    <MyProfile/> Profile
                  </DropdownMenu.CheckboxItem >

                  <DropdownMenu.Separator className={s.DropdownMenuSeparator} /> {/* просто линия */}

                    <DropdownMenu.RadioItem className={s.DropdownMenuRadioItem} value="pedro">
                      <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
                        <SelectDownIcon/>
                      </DropdownMenu.ItemIndicator>
                      <LogoutWhite/>Sign Out
                    </DropdownMenu.RadioItem>
                  <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
                </DropdownMenu.Content>

              </DropdownMenu.Portal>

            </DropdownMenu.Root>
      </div>
  )
}



