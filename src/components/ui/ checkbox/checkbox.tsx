import { useState } from 'react'

import { CheckIcon } from '@/components/assets/icons/componentSvg/check'
import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxComponentProps = {
  withLabel?: boolean
}
export const CheckboxComponent = (props: CheckboxComponentProps) => {
  const [checked, setChecked] = useState<'indeterminate' | boolean>(false)
  const { withLabel = false } = props

  return (
    <form>
      <div>
        <Checkbox.Root
          checked={checked}
          className={s.CheckboxRoot}
          defaultChecked
          id={'c1'}
          onCheckedChange={setChecked}
        >
          <Checkbox.Indicator className={s.CheckboxIndicator} forceMount>
            {/* forceMount свойство, которое не дает исчезать после checked */}
            {checked === true ? <CheckIcon /> : ''}
          </Checkbox.Indicator>
        </Checkbox.Root>
        {withLabel && (
          <label className={'s.Label'} htmlFor={'c1'}>
            <Typography>Accept terms and conditions.</Typography>
          </label>
        )}
      </div>
    </form>
  )
}
