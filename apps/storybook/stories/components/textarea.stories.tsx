import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Textarea } from '@vietz-dev/design-react'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Write something useful',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Textarea {...args} />
    </div>
  ),
}

export const InField: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Project brief" helperText="A few lines are enough to get started.">
        <Textarea {...args} placeholder="What are you building?" />
      </Field>
    </div>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Support request" invalid errorText="Please provide a bit more detail.">
        <Textarea {...args} defaultValue="Help" />
      </Field>
    </div>
  ),
}
