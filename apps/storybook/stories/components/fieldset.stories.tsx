import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox, Field, Fieldset, Input, RadioGroup, Switch } from '@vietz-dev/design-react'

const meta = {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: null,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fieldset>

export default meta

type Story = StoryObj<typeof meta>

export const ContactPreferences: Story = {
  render: () => (
    <div style={{ width: 480, maxWidth: '100%' }}>
      <Fieldset legend="Contact preferences" helperText="These settings help define how I should reach out.">
        <Field label="Display name">
          <Input placeholder="Justin Vietz" />
        </Field>
        <RadioGroup
          label="Preferred contact method"
          defaultValue="email"
          items={[
            { value: 'email', label: 'Email', description: 'Best for longer project details.' },
            { value: 'chat', label: 'Chat', description: 'Good for faster back and forth.' },
          ]}
        />
        <div style={{ display: 'grid', gap: 12 }}>
          <Checkbox defaultChecked>Receive project updates</Checkbox>
          <Switch>Share weekly summary</Switch>
        </div>
      </Fieldset>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div style={{ width: 480, maxWidth: '100%' }}>
      <Fieldset legend="Publishing settings" errorText="Please complete the required options in this group.">
        <RadioGroup
          label="Visibility"
          items={[
            { value: 'private', label: 'Private' },
            { value: 'public', label: 'Public' },
          ]}
        />
      </Fieldset>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 480, maxWidth: '100%' }}>
      <Fieldset legend="Workspace controls" helperText="Managed by your organization." disabled>
        <Switch defaultChecked>Allow production deploys</Switch>
        <Checkbox defaultChecked>Enable audit logging</Checkbox>
      </Fieldset>
    </div>
  ),
}

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" style={{ width: 480, maxWidth: '100%', padding: 16, background: 'var(--bg)' }}>
      <Fieldset legend="Notifications" helperText="Still readable in dark mode.">
        <Checkbox defaultChecked>Product updates</Checkbox>
        <Checkbox>Security alerts</Checkbox>
      </Fieldset>
    </div>
  ),
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
}
