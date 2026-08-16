import type { Meta, StoryObj } from '@storybook/react-vite'
import { InlineCode, SurfaceCard, Tag } from '@vietz-dev/design-react'

function FoundationsShowcase() {
  return (
    <div className="site-container" style={{ display: 'grid', gap: 24 }}>
      <section className="page-section" style={{ paddingTop: 24, paddingBottom: 0 }}>
        <div className="muted-meta">vietz-design foundations</div>
        <h1 className="page-title">Warm, technical, opinionated.</h1>
        <p className="body-text">
          The design system is built around IBM Plex typography, flat offset shadows, warm neutrals, and a rust-orange accent. Interactive behavior belongs to Ark UI; the visual layer belongs here.
        </p>
      </section>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Tag>IBM Plex Sans</Tag>
        <Tag>IBM Plex Mono</Tag>
        <Tag variant="accent">OKLCH tokens</Tag>
      </div>

      <SurfaceCard>
        <h2 className="display-title" style={{ fontSize: 24 }}>Usage</h2>
        <p className="body-text">
          Import <InlineCode>styles.css</InlineCode> from the React package to get the base tokens and component styles.
        </p>
      </SurfaceCard>
    </div>
  )
}

const meta = {
  title: 'Foundations/Overview',
  component: FoundationsShowcase,
  tags: ['autodocs'],
} satisfies Meta<typeof FoundationsShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {}
