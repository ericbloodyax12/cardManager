import React from 'react';
import * as Select from '@radix-ui/react-select';
// import classnames from 'classnames';
import s from './select.module.scss';
import {SelectDownIcon} from "@/components/assets/icons/componentSvg/selectDownIcon";
import {SelectUpIcon} from "@/components/assets/icons/componentSvg/selectUpComponent";
import {Typography} from "@/components/ui/typography";


type SelectComponentProps = {
  items: SelectItemProps[];
};

export const SelectComponent = ({items}: SelectComponentProps) => (
    <Select.Root>
      <div className={s.rootContainer}>
      <Select.Trigger className={s.SelectTrigger} aria-label="Food">
        <Typography><Select.Value placeholder="Select box" /></Typography>
        <Select.Icon className={s.SelectIcon}>
         <SelectDownIcon/>
        </Select.Icon>
      </Select.Trigger>
      {/*<Select.Portal>*/}
        <Select.Content className={s.SelectContent}>
          <Select.ScrollUpButton className={s.SelectScrollButton}>
            <SelectUpIcon/>
          </Select.ScrollUpButton>
          <Select.Viewport className={s.SelectViewport}>
            <Select.Group>
              {items.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.children}
                  </SelectItem>
              ))}
              {/*<SelectItem value="apple">Apple</SelectItem>*/}
              {/*<SelectItem value="banana">Banana</SelectItem>*/}
              {/*<SelectItem value="blueberry">Blueberry</SelectItem>*/}
              {/*<SelectItem value="grapes">Grapes</SelectItem>*/}
              {/*<SelectItem value="pineapple">Pineapple</SelectItem>*/}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={s.SelectScrollButton}>
            <SelectDownIcon/>
          </Select.ScrollDownButton>
        </Select.Content>
      {/*</Select.Portal>*/}
      </div>
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

