import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@vietz-design/react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Save changes',
    variant: 'primary',
    size: 'md',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Cancel',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Back',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Send message',
    startIcon: <span style={{ fontSize: 14 }}>↗</span>,
    endIcon: <span style={{ fontSize: 14 }}>→</span>,
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const FormActions: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <div className="surface-card" style={{ display: 'grid', gap: 16 }}>
        <div>
          <div className="muted-meta">contact form</div>
          <h3 className="display-title" style={{ fontSize: 24, marginTop: 12 }}>Button pairing</h3>
          <p className="body-text">Primary actions should stand out. Secondary and ghost actions support less important paths.</p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary">Send message</Button>
          <Button variant="secondary">Save draft</Button>
          <Button variant="ghost">Reset</Button>
        </div>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DarkMode: Story = {
  render: (args) => (
    <div data-theme="dark" style={{ padding: 16, background: 'var(--bg)' }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button {...args}>Save changes</Button>
        <Button {...args} variant="secondary">Cancel</Button>
        <Button {...args} variant="ghost">Back</Button>
      </div>
    </div>
  ),
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
}
