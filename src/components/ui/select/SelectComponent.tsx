import React from 'react';
import * as Select from '@radix-ui/react-select';
// import classnames from 'classnames';
import {SelectDownIcon} from "@/components/assets/icons/componentSvg/selectDownIcon";
import {Typography} from "@/components/ui/typography";

import s from './select.module.scss';


type SelectComponentProps = {
  items: SelectItemProps[];
};

export const SelectComponent = ({items}: SelectComponentProps) => (
    <Select.Root>
      <Select.Trigger className={s.SelectTrigger} aria-label="Food">
        <Typography><Select.Value placeholder="Select box" /></Typography>
         <SelectDownIcon/>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position={"popper"} className={s.SelectContent}>
            <Select.Group>
              {items.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.children}
                  </SelectItem>
              ))}
            </Select.Group>
          <Select.ScrollDownButton className={s.SelectScrollButton}>
            <SelectDownIcon/>
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
);

type SelectItemProps = {
  value: string;
  children: string;
} & React.ComponentPropsWithoutRef<typeof Select.Item>;

const SelectItem = React.forwardRef<HTMLDivElement ,SelectItemProps>(({ children, className, ...props }, forwardedRef) => {
  return (
      <Select.Item className={s.SelectItem} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
        </Select.ItemIndicator>
      </Select.Item>
  );
});

// const SelectItem2 = React.forwardRef<HTMLDivElement ,SelectItemProps>(({ children, className, ...props }, forwardedRef) => {
//   return (
//
//       <Select.Item className={s.SelectItem} {...props} ref={forwardedRef}>
//         <Typography variant={"body1"}>{children}</Typography>
//         <Select.ItemIndicator className="SelectItemIndicator">
//         </Select.ItemIndicator>
//       </Select.Item>
//   );
// });

