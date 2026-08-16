import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Input, Textarea } from '@vietz-dev/design-react'

const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: null,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const InputField: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Email address" helperText="I will only use this to reply." required>
        <Input type="email" placeholder="justin@vietz.dev" />
      </Field>
    </div>
  ),
}

export const InvalidField: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Project name" invalid errorText="Please enter at least 3 characters.">
        <Input defaultValue="AI" />
      </Field>
    </div>
  ),
}

export const TextareaField: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Message" helperText="Short and direct beats clever.">
        <Textarea placeholder="Tell me what you want to build..." />
      </Field>
    </div>
  ),
}

export const DisabledField: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="API key" helperText="Generated automatically." disabled>
        <Input value="vietz_live_123456" readOnly />
      </Field>
    </div>
  ),
}

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" style={{ width: 420, maxWidth: '100%', padding: 16, background: 'var(--bg)' }}>
      <Field label="Notes" helperText="Visible in dark mode too.">
        <Textarea placeholder="Add context" />
      </Field>
    </div>
  ),
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
}
