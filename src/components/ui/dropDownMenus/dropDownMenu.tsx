
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


import s from './dropDownMenu.module.scss';
import {
  DropDownMenuIcon1,
  DropDownMenuIcon2, DropDownMenuIcon3,
  DropDownMenuIcon4
} from "@/components/assets/icons/componentSvg/dropDownMenu/dropDownMenuIcon";
import {CheckIcon} from "@/components/assets/icons/componentSvg/check";

import {SelectDownIcon} from "@/components/assets/icons/componentSvg/selectDownIcon";


export const DropDownMenuComponent = () => {


  return (
          <div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className={s.IconButton} aria-label="Customise options">
                  <DropDownMenuIcon1 />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
                  <DropdownMenu.Item className={s.DropdownMenuItem}>
                    <DropDownMenuIcon2 />Learn
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className={s.DropdownMenuSeparator} /> {/* просто линия - перегородка */}

                  <DropdownMenu.CheckboxItem
                      className={s.DropdownMenuCheckboxItem}
                  > {/* внутри item можно установить checked и onCheckedChange */}
                    <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
                      <CheckIcon />
                    </DropdownMenu.ItemIndicator>
                    <DropDownMenuIcon3 />Edit
                  </DropdownMenu.CheckboxItem >

                  <DropdownMenu.Separator className={s.DropdownMenuSeparator} /> {/* просто линия */}

                    <DropdownMenu.RadioItem className={s.DropdownMenuRadioItem} value="pedro">
                      <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
                        <SelectDownIcon/>
                      </DropdownMenu.ItemIndicator>
                      <DropDownMenuIcon4 />Delete
                    </DropdownMenu.RadioItem>
                  <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
  )
}



