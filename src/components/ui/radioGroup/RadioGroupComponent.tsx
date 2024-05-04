import * as RadioGroup from '@radix-ui/react-radio-group';
import s from './radioGroup.module.scss';
import {Typography} from "@/components/ui/typography";



export const RadioGroupComponent = () => {

  return (
      <form>
        <RadioGroup.Root className={s.RadioGroupRoot} defaultValue="default" aria-label="View density">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup.Item className={s.RadioGroupItem} value="default" id="r1">
              <RadioGroup.Indicator className={s.RadioGroupIndicator} />
            </RadioGroup.Item>
            <Typography className={s.Label} variant={"body2"} htmlFor="r1">
              Did not know
            </Typography>
          </div>
        </RadioGroup.Root>
      </form>
  )
}



