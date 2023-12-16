import LogoutIcon from '@/components/assets/icons/logout.svg'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from './'
const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}
Primary.storyName = 'Primary Button' // для создания сложных имен
export const PrimaryButtonWithIcon: Story = {
  args: {
    children: 'sasa',
    disabled: false,
    icon: LogoutIcon,
    variant: 'primary',
  },
}
PrimaryButtonWithIcon.storyName = 'Primary Button with Icon'
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'tertiary',
  },
}
export const FullWidth: Story = {
  args: {
    ...Primary.args, // забираем все аргументы по дефолту от праймери
    children: 'Full Width Button',
    fullWidth: true,
  },
}
export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'button as link',
    href: 'https://www.youtube.com/watch?v=8D9d9weVQnI&list=PLqFTZCcUCeaQ0e9QmIKVrAGEWFrIWR4nm&index=8',
    variant: 'link',
  },
}
