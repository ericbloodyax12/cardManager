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
  const {
      checked,
      className,
      label = '',
      onCheckedChange,
      withLabel = false,
      ...rest
  } = props
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(!!checked)

  // useEffect(() => {
  //   setCheckBoxValue(!!checked)
  // }, [checked])

  console.log('checked:', checked)

  return (
    <div className={s.checkboxContainer}>
      <Checkbox.Root
        checked={checkBoxValue}
        className={`${s.CheckboxRoot} ${className}`}
        id={'c1'}
        onCheckedChange={checked => {
          // const value = !!checked

          onCheckedChange?.(checked)
          setCheckBoxValue(!!checked)
        }}
        {...rest}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          {checkBoxValue ? <CheckIcon /> : ''}
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
