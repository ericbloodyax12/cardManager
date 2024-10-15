
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  DropDownMenuIcon1,
  DropDownMenuIcon2, DropDownMenuIcon3,
  DropDownMenuIcon4
} from "@/components/assets/icons/componentSvg/dropDownMenu/dropDownMenuIcon";
import {CheckIcon} from "@/components/assets/icons/componentSvg/check";
import {SelectDownIcon} from "@/components/assets/icons/componentSvg/selectDownIcon";

import './dropDownMenu.scss';

export const DropDownMenuComponent = () => {


  return (
          <div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                  <DropDownMenuIcon1 />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                  <DropdownMenu.Item className="DropdownMenuItem">
                    <DropDownMenuIcon2 />Learn
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className="DropdownMenuSeparator" /> {/* просто линия - перегородка */}

                  <DropdownMenu.CheckboxItem
                      className="DropdownMenuCheckboxItem"
                  > {/* внутри item можно установить checked и onCheckedChange */}
                    <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                      <CheckIcon />
                    </DropdownMenu.ItemIndicator>
                    <DropDownMenuIcon3 />Edit
                  </DropdownMenu.CheckboxItem >

                  <DropdownMenu.Separator className="DropdownMenuSeparator" /> {/* просто линия */}

                    <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="pedro">
                      <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                        <SelectDownIcon/>
                      </DropdownMenu.ItemIndicator>
                      <DropDownMenuIcon4 />Delete
                    </DropdownMenu.RadioItem>
                  <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
  )
}



