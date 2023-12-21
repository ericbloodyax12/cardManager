import { useState } from 'react'

import { CheckIcon } from '@/components/assets/icons/componentSvg/check'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export const CheckboxComponent = () => {
  const [checked, setChecked] = useState<'indeterminate' | boolean>(false)

  return (
    <form>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <Checkbox.Root
          checked={checked}
          className={s.CheckboxRoot}
          defaultChecked
          id={'c1'}
          onCheckedChange={setChecked}
        >
          <Checkbox.Indicator className={s.CheckboxIndicator} forceMount>
            {/*forceMount*/}
            {checked === true ? <CheckIcon /> : <CheckIcon />}
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={'s.Label'} htmlFor={'c1'}>
          Accept terms and conditions.
        </label>
      </div>
    </form>
  )
}
