import type { Meta, StoryObj } from '@storybook/react-vite'
import { AngleSlider } from '@vietz-dev/design-react'

const meta = {
  title: 'Components/AngleSlider',
  component: AngleSlider,
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultValue: 135,
    label: 'Light mode',
    unitLabel: 'degrees',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AngleSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMarkers: Story = {
  args: {
    label: 'With markers',
    defaultValue: 90,
    showMarkers: true,
    markerStep: 45,
  },
}

export const Stepped: Story = {
  args: {
    label: 'Stepped (45°)',
    defaultValue: 90,
    step: 45,
    showMarkers: true,
    markerStep: 45,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    defaultValue: 60,
    disabled: true,
    size: 120,
  },
}

export const DarkMode: Story = {
  args: {
    label: 'Dark mode',
    defaultValue: 220,
    size: 140,
  },
  render: (args) => (
    <div data-theme="dark" style={{ padding: 16, background: 'var(--bg)', borderRadius: 12 }}>
      <AngleSlider {...args} />
    </div>
  ),
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
}
