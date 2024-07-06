
import * as Switch from '@radix-ui/react-switch';
import s from "./switch.module.scss";
import {Typography} from "@/components/ui/typography";
import {useTheme} from "@/contexts/themeContext";

export const SwitchComponent = () => {
  const { toggleTheme } = useTheme();


  return (
      <form>
        <div className={s.switchDivContainer} >
          <Typography className={s.Label} variant={"label"} >
            {/*{} some text here*/}
          </Typography>
          <Switch.Root  className={s.SwitchRoot} id="airplane-mode" onCheckedChange={toggleTheme}>
            <Switch.Thumb className={s.SwitchThumb} />
          </Switch.Root>
        </div>
      </form>
      )

}



