import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Input',
    variant: 'default',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    label: 'Input',
    variant: 'password',
  },
}
export const Search: Story = {
  args: {
    disabled: false,
    variant: 'search',
  },
}
export const Error: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error',
  },
}
export const FullWidth: Story = {
  args: {
    disabled: false,
    fullWidth: true,
  },
}
