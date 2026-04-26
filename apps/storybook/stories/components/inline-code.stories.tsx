import type { Meta, StoryObj } from '@storybook/react-vite'
import { InlineCode } from '@vietz-design/react'

const meta = {
  title: 'Components/InlineCode',
  component: InlineCode,
  args: {
    children: 'pnpm dev:storybook',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InlineCode>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <p className="body-text">
      Start the docs locally with <InlineCode {...args} />.
    </p>
  ),
}
