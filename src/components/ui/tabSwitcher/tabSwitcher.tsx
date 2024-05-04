import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'


import s from './tabSwitcher.module.scss'

type TabInfo = {
  title: string
}
type TabSwitcherProps = {
  tabs: TabInfo[]
  valueName: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = React.forwardRef<ElementRef<typeof Tabs.Trigger>, TabSwitcherProps>(
    ({ tabs, valueName, ...rest }) => {
      const tabsWithValue = tabs.map(t => ({ ...t, value: valueName}))
      console.log('tab value',tabs)
      return (
          <Tabs.Root className={s.tabsRoot} defaultValue={tabsWithValue[0].value} {...rest}>
            <Tabs.List aria-label={'My TabSwitcher'} className={s.TabsList}>
              {tabsWithValue.map((tab, index) => {
                return (
                    <Tabs.Trigger className={s.TabsTrigger} key={index} value={tab.value}>
                      {tab.title}
                    </Tabs.Trigger>
                )
              })}
            </Tabs.List>
          </Tabs.Root>
      )
    }
)
