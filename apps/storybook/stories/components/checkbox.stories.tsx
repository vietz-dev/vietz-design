import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox, Field } from '@vietz-design/react'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Accept terms',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithHelperText: Story = {
  args: {
    children: 'Subscribe to updates',
    helperText: 'I will send practical updates, not noise.',
  },
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
    children: 'Enable analytics',
  },
}

export const InField: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Permissions" helperText="Pick the settings you want to enable.">
        <div style={{ display: 'grid', gap: 12 }}>
          <Checkbox defaultChecked>Receive product updates</Checkbox>
          <Checkbox>Allow weekly summary emails</Checkbox>
        </div>
      </Field>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Locked setting',
    helperText: 'This cannot be changed right now.',
  },
}
