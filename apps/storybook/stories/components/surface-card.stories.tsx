import type { Meta, StoryObj } from '@storybook/react-vite'
import { SurfaceCard, Tag } from '@vietz-dev/design-react'

const meta = {
  title: 'Components/SurfaceCard',
  component: SurfaceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SurfaceCard>

export default meta

type Story = StoryObj<typeof meta>

export const Static: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <SurfaceCard {...args}>
        <div className="muted-meta">project card</div>
        <h3 className="display-title" style={{ fontSize: 24, marginTop: 12 }}>Reverse proxy from scratch</h3>
        <p className="body-text">
          Ever wondered how a reverse proxy handles incoming requests? This project explores the basics without hiding the ugly parts.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Tag>Go</Tag>
          <Tag variant="accent">Networking</Tag>
        </div>
      </SurfaceCard>
    </div>
  ),
}

export const Interactive: Story = {
  render: (args) => (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <SurfaceCard {...args} variant="interactive" tabIndex={0}>
        <div className="muted-meta">interactive card</div>
        <h3 className="display-title" style={{ fontSize: 24, marginTop: 12 }}>Hover to lift</h3>
        <p className="body-text">Interactive surfaces use the hard-offset shadow treatment from the imported design reference.</p>
      </SurfaceCard>
    </div>
  ),
}
