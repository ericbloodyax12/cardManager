
import s from './testPage.module.scss'

import {DropDownMenuComponent} from "@/components/ui/dropDownMenu/dropDownMenu";


export const TestComponentsPage = () => {
  // const tabs = [
  //   { title: 'Apple' },
  //   { title: 'Juice' },
  //   { title: 'Lemon' },
  // ]

  return (
      <div className={s.testContainer}>
        <DropDownMenuComponent/>
      </div>


  )
}