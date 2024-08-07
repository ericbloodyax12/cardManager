
import * as Switch from '@radix-ui/react-switch';
import s from "./switch.module.scss";
import {useTheme} from "@/contexts/themeContext";

export const SwitchComponent = () => {
  const { themeClassName,toggleTheme } = useTheme();


  return (
      <form>
        <div title={"Switch mode"} className={s.switchDivContainer} >
          <Switch.Root
                        className={s.SwitchRoot}
                        id="airplane-mode"
                        checked={themeClassName === 'whiteMode'}
                        onCheckedChange={toggleTheme}
          >
            <Switch.Thumb className={s.SwitchThumb} />
          </Switch.Root>
        </div>
      </form>
      )
}



