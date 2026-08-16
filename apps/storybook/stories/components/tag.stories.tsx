import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from '@vietz-dev/design-react'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  args: {
    children: 'Ark UI',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {}

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'React',
  },
}
