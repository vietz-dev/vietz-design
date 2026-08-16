import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Select } from '@vietz-dev/design-react'

const items = [
  { label: 'React', value: 'react' },
  { label: 'Astro', value: 'astro' },
  { label: 'Next.js', value: 'next' },
  { label: 'SvelteKit', value: 'sveltekit', disabled: true },
]

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {
    items,
    placeholder: 'Choose a framework',
    defaultValue: ['react'],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Select {...args} />
    </div>
  ),
}

export const Placeholder: Story = {
  args: {
    defaultValue: undefined,
  },
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Select {...args} />
    </div>
  ),
}

export const InField: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Framework" helperText="Pick the one this project is built with.">
        <Select items={items} placeholder="Choose a framework" defaultValue={['astro']} />
      </Field>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <Field label="Project type" invalid errorText="Please select one option.">
        <Select items={items} placeholder="Choose a framework" invalid defaultValue={[]} />
      </Field>
    </div>
  ),
}

export const DarkMode: Story = {
  render: (args) => (
    <div data-theme="dark" style={{ width: 420, maxWidth: '100%', padding: 16, background: 'var(--bg)' }}>
      <Select {...args} />
    </div>
  ),
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
}
