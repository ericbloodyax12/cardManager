import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './'

const meta = {
  argTypes: {},
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TemplateTabSwitcher: Story = {
  args: {
    tabs: [{ title: 'TabSwitcher1' }, { title: 'TabSwitcher2' }],
  },
}
