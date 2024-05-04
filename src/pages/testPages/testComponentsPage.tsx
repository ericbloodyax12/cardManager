import {RadioGroupComponent} from "@/components/ui/radioGroup";
import s from './testPage.module.scss'
import {SelectComponent} from "@/components/ui/select";
import {TabSwitcher} from "@/components/ui/tabSwitcher";
import {TextField} from "@/components/ui/textField";

export const TestComponentsPage = () => {
  const tabs = [
    { title: 'Apple' },
    { title: 'Juice' },
    { title: 'Lemon' },
  ]
  return (
      <div className={s.testContainer}>
        <RadioGroupComponent/>
        <SelectComponent options={["apple,lemon"]}/>
        <TabSwitcher tabs={tabs} valueName={"fruit"}/>
        <TextField/>
        <TextField variant={"password"}/>
        <TextField variant={"search"}/>
      </div>
  )
}