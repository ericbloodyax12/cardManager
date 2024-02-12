import { Meta, StoryObj } from '@storybook/react'

import { Card} from './'
import {Typography} from "@/components/ui/typography";
const meta = {
    argTypes: {

    },
    component: Card,
    tags: ['autodocs'],
    title: 'Components/UI/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
        children: <Typography variant={'large'}>Card</Typography>
    },
}