import { Meta, StoryObj } from '@storybook/react'
import {SelectComponent} from './SelectComponent'


const meta = {
  argTypes: {
  },
  component: SelectComponent,
  tags: ['autodocs'],
  title: 'Components/UI/Select',
} satisfies Meta<typeof SelectComponent>
export default meta
type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  args: {
options: ["js","html","css"],
  },

}