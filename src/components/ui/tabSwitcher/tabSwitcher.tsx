import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { v1 } from 'uuid'

import s from './tabSwither.module.scss'

type TabInfo = {
  title: string
}
type TabSwitcherProps = {
  tabs: TabInfo[]
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = React.forwardRef<ElementRef<typeof Tabs.Trigger>, TabSwitcherProps>(
    ({ tabs, ...rest }) => {
      const tabsWithValue = tabs.map(t => ({ ...t, value: v1() }))

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
