import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroup } from '@vietz-dev/design-react'

const items = [
  {
    value: 'email',
    label: 'Email',
    description: 'Best for longer replies and project details.',
  },
  {
    value: 'chat',
    label: 'Chat',
    description: 'Good for faster back and forth.',
  },
  {
    value: 'call',
    label: 'Call',
    description: 'Useful when text would just slow things down.',
    disabled: true,
  },
]

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Preferred contact method',
    items,
    defaultValue: 'email',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <RadioGroup {...args} />
    </div>
  ),
}

export const EmptySelection: Story = {
  args: {
    defaultValue: undefined,
  },
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <RadioGroup {...args} />
    </div>
  ),
}

export const DarkMode: Story = {
  render: (args) => (
    <div data-theme="dark" style={{ width: 420, maxWidth: '100%', padding: 16, background: 'var(--bg)' }}>
      <RadioGroup {...args} />
    </div>
  ),
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
}
