
import s from './select.module.scss'
import {useState} from "react";
import {Typography} from "@/components/ui/typography";

type SelectPropsType = {
  options: string[]
  disabled?: boolean
}
export const SelectComponent = (selectProps: SelectPropsType) => {
  const {options,disabled,...res} = selectProps
  const [selectedOption, setSelectedOption] = useState<string>(options[0] || '')

  return (
      <div className={s.select_Container}>
        <Typography as={"label"} variant={"label"}>{selectedOption}</Typography>
        <select className={s.select} disabled={!!disabled} {...res} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          {options.map((option, index) => (
              <option key={index} value={option}>{<Typography variant={'body1'}>{option}</Typography>}</option>
          ))}
        </select>

      </div>

  );
}



