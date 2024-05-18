import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'


import s from './tabSwitcher.module.scss'
import {Typography} from "@/components/ui/typography";

type TabInfo = {
  title: string
}
type TabSwitcherProps = {
  tabs: TabInfo[]
  valueName: string
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = React.forwardRef<ElementRef<typeof Tabs.Trigger>, TabSwitcherProps>(
    ({ tabs, valueName,disabled = false, ...rest }) => {
      const tabsWithValue = tabs.map(t => ({ ...t, value: valueName}))
      console.log('tab value',tabs)
      return (
          <Tabs.Root className={s.tabsRoot} defaultValue={tabsWithValue[0].value} {...rest}>
            <Tabs.List aria-label={'My TabSwitcher'} className={s.TabsList}>
              {tabsWithValue.map((tab, index) => {
                return (
                    <Tabs.Trigger disabled={disabled} className={`${s.TabsTrigger} ${disabled ? s.disabled : ''}`} key={index} value={tab.value}>
                      <Typography>{tab.title}</Typography>
                    </Tabs.Trigger>
                )
              })}
            </Tabs.List>
          </Tabs.Root>
      )
    }
)
