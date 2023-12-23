import { useState } from 'react'

import { CheckIcon } from '@/components/assets/icons/componentSvg/check'
import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxComponentProps = {
  withLabel?: boolean
} & CheckboxProps
export const CheckboxComponent = (props: CheckboxComponentProps) => {
  const [checked, setChecked] = useState<boolean>(false)
  const { withLabel = false, ...rest } = props

  return (
    <div className={s.checkboxContainer}>
      <Checkbox.Root
        checked={checked}
        className={s.CheckboxRoot}
        id={'c1'}
        onCheckedChange={setChecked as (checked: 'indeterminate' | boolean) => void}
        {...rest}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          {checked === true ? <CheckIcon /> : ''}
        </Checkbox.Indicator>
      </Checkbox.Root>
      {withLabel && (
        <label className={s.Label} htmlFor={'c1'}>
          <Typography as={'p'} variant={'body2'}>
            Accept terms and conditions.
          </Typography>
        </label>
      )}
    </div>
  )
}
