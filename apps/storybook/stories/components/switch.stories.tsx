import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Switch } from '@vietz-dev/design-react'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Dark mode',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
    children: 'Public profile',
  },
}

export const WithHelperText: Story = {
  args: {
    children: 'Automatic deploys',
    helperText: 'Deploy every push to the main branch.',
  },
}

export const InField: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Preferences" helperText="These settings affect behavior immediately.">
        <div style={{ display: 'grid', gap: 12 }}>
          <Switch defaultChecked>Enable notifications</Switch>
          <Switch>Show online status</Switch>
        </div>
      </Field>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Production mode',
    helperText: 'Managed by your workspace admin.',
  },
}
