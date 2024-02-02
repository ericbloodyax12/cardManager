import { useState } from 'react'

import { CheckIcon } from '@/components/assets/icons/componentSvg/check'
import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxComponentProps = {
  label?: string
  withLabel?: boolean
} & CheckboxProps
export const CheckboxComponent = (props: CheckboxComponentProps) => {
  const { label = '', withLabel = false, ...rest } = props
  const { checked, onCheckedChange } = props
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(checked as boolean)
  const checkBoxStateInfo = {
    changeCallBack: onCheckedChange ? onCheckedChange : setCheckBoxValue,
    value: checked ? checked : checkBoxValue,
  }

  console.log('checked:', checked)

  return (
    <div className={s.checkboxContainer}>
      <Checkbox.Root
        checked={checkBoxStateInfo.value}
        className={s.CheckboxRoot}
        id={'c1'}
        onCheckedChange={() =>
          checkBoxStateInfo.changeCallBack(!checkBoxStateInfo.value as boolean)
        }
        {...rest}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          {checkBoxStateInfo.value === true ? <CheckIcon /> : ''}
        </Checkbox.Indicator>
      </Checkbox.Root>
      {withLabel && (
        <label className={s.Label} htmlFor={'c1'}>
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        </label>
      )}
    </div>
  )
}
