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
  const [value, setChecked] = useState<boolean>(false)
  const { label = '', withLabel = false, ...rest } = props

  return (
    <div className={s.checkboxContainer}>
      <Checkbox.Root
        checked={value}
        className={s.CheckboxRoot}
        id={'c1'}
        onCheckedChange={setChecked as (checked: 'indeterminate' | boolean) => void}
        {...rest}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          {value === true ? <CheckIcon /> : ''}
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
