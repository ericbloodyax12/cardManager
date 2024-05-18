import {RadioGroupComponent} from "@/components/ui/radioGroup";
import s from './testPage.module.scss'
import {SelectComponent} from "@/components/ui/select";
import {TabSwitcher} from "@/components/ui/tabSwitcher";


export const TestComponentsPage = () => {
  // const tabs = [
  //   { title: 'Apple' },
  //   { title: 'Juice' },
  //   { title: 'Lemon' },
  // ]

  return (
      <div className={s.testContainer}>
        <RadioGroupComponent/>
        <SelectComponent  items={[
          { value: 'apple', children: 'Apple' },
          { value: 'banana', children: 'Banana' },
          { value: 'blueberry', children: 'Blueberry' },
          { value: 'grapes', children: 'Grapes' },
          { value: 'pineapple', children: 'Pineapple' },
        ]} />
        <TabSwitcher tabs={ [
          { title: 'Apple' },
          { title: 'Juice' },
          { title: 'Juice' },
          { title: 'Lemon' }
        ]} valueName="my-tabs" disabled={false}/>
      </div>

  )
}