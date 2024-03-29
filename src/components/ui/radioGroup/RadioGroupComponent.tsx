import * as RadioGroup from '@radix-ui/react-radio-group';
import './radioGroup.css';
import {Typography} from "@/components/ui/typography";



export const RadioGroupComponent = () => {

  return (
      <form>
        <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <Typography className="Label" variant={"body2"} htmlFor="r1">
              Did not know
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor="r2">
              Comfortable
            </label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor="r3">
              Compact
            </label>
          </div>
        </RadioGroup.Root>
      </form>
  )
}



