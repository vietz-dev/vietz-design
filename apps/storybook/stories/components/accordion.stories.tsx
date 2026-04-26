import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from '@vietz-design/react'

const items = [
  {
    value: 'about-ark',
    title: 'About Ark UI',
    content:
      'Headless, framework-agnostic components. You bring the style, Ark UI brings accessible behavior and structure.',
  },
  {
    value: 'design-system',
    title: 'Why use a design system package?',
    content:
      'A dedicated package makes it easier to share tokens, interaction patterns, and components across multiple projects.',
  },
  {
    value: 'disabled',
    title: 'Disabled item',
    content: 'This content is intentionally unreachable.',
    disabled: true,
  },
]

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  args: {
    items,
    defaultValue: ['about-ark'],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 480, maxWidth: '100%' }}>
      <Accordion {...args} />
    </div>
  ),
}

export const MultipleOpen: Story = {
  args: {
    multiple: true,
    defaultValue: ['about-ark', 'design-system'],
  },
  render: (args) => (
    <div style={{ width: 480, maxWidth: '100%' }}>
      <Accordion {...args} />
    </div>
  ),
}

export const DarkMode: Story = {
  render: (args) => (
    <div data-theme="dark" style={{ width: 480, maxWidth: '100%', padding: 16, background: 'var(--bg)' }}>
      <Accordion {...args} />
    </div>
  ),
  globals: {
    backgrounds: {
      value: "dark"
    }
  },
}
