import { CheckboxComponent } from '@/components/ui/ checkbox/checkbox'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary'],
    },
  },
  component: CheckboxComponent,
  tags: ['autodocs'],
  title: 'Components/UI/CheckboxComponent',
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Dufault: Story = {
  args: {
    children: 'Dufault',
    disabled: false,
  },
}
