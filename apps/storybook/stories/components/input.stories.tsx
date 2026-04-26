import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Input } from '@vietz-design/react'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Type here',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Input {...args} />
    </div>
  ),
}

export const InField: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Full name" helperText="Use your real name for invoices.">
        <Input {...args} placeholder="Justin Vietz" />
      </Field>
    </div>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Email" invalid errorText="This does not look like a valid email address.">
        <Input {...args} type="email" defaultValue="not-an-email" />
      </Field>
    </div>
  ),
}
