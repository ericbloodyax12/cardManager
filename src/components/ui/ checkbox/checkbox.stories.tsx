import { CheckboxComponent } from '@/components/ui/ checkbox/checkbox'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: CheckboxComponent,
  tags: ['autodocs'],
  title: 'Components/UI/CheckboxComponent',
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const WithoutLabel: Story = {
  args: {
    withLabel: false,
  },
}
export const WithLabel: Story = {
  args: {
    withLabel: true,
  },
}
