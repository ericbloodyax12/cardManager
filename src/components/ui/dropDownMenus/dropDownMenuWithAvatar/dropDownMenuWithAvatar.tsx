
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import image010 from '../../../assets/images/010.jpg'



import {CheckIcon} from "@/components/assets/icons/componentSvg/check";
import {SelectDownIcon} from "@/components/assets/icons/componentSvg/selectDownIcon";
import {MyProfile} from "@/components/assets/icons/componentSvg/dropDownMenu/myProfile";
import {LogoutWhite} from "@/components/assets/icons/componentSvg/dropDownMenu/logoutWhite";
import {Avatar} from "@/components/assets/Avatar/avatar";
import {Typography} from "@/components/ui/typography";

import './dropDownMenuWithAvatar.scss';

export type DropDownMenuWithAvatarComponentProps = {
  email?:string
}
export const DropDownMenuWithAvatarComponent = ({email = "as@gmail.com"}:DropDownMenuWithAvatarComponentProps) => {


  return (
      <div className="dropDownMenuContainer">
            <DropdownMenu.Root>

              <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                  <img className="staticAvatar" src={image010}/>
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>

                    <DropdownMenu.Item className="DropdownMenuItem">
                    <Avatar initialImageUrl={image010}/>
                    <div className="AvatarLabel">
                      <Typography>
                        Barsegyan Group
                      </Typography>
                      {email}
                    </div>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className="DropdownMenuSeparator" /> {/* просто линия - перегородка */}

                  <DropdownMenu.CheckboxItem
                      className="DropdownMenuCheckboxItem"
                  > {/* внутри item можно установить checked и onCheckedChange */}
                    <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                      <CheckIcon />
                    </DropdownMenu.ItemIndicator>
                    <MyProfile/> Profile
                  </DropdownMenu.CheckboxItem >

                  <DropdownMenu.Separator className="DropdownMenuSeparator" /> {/* просто линия */}

                    <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="pedro">
                      <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                        <SelectDownIcon/>
                      </DropdownMenu.ItemIndicator>
                      <LogoutWhite/>Sign Out
                    </DropdownMenu.RadioItem>
                  <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>

              </DropdownMenu.Portal>

            </DropdownMenu.Root>
      </div>
  )
}



