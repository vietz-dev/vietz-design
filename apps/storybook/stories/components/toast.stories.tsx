import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, ToastRegion, createToaster } from '@vietz-design/react'

function ToastPlayground() {
  const toaster = React.useMemo(
    () =>
      createToaster({
        placement: 'bottom-end',
        overlap: false,
        gap: 12,
      }),
    [],
  )

  return (
    <div style={{ minHeight: 240 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button
          onClick={() =>
            toaster.success({
              title: 'Changes saved',
              description: 'Your form data is now stored.',
              closable: true,
            })
          }
        >
          Show success toast
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toaster.info({
              title: 'Deploy running',
              description: 'This can take a minute or two.',
              closable: true,
              action: {
                label: 'Details',
                onClick: () => undefined,
              },
            })
          }
        >
          Show action toast
        </Button>
        <Button
          variant="ghost"
          onClick={() =>
            toaster.error({
              title: 'Publish failed',
              description: 'The build finished, but the upload step failed.',
              closable: true,
            })
          }
        >
          Show error toast
        </Button>
      </div>
      <ToastRegion toaster={toaster} />
    </div>
  )
}

const meta = {
  title: 'Components/Toast',
  component: ToastRegion,
  parameters: {
    layout: 'padded',
  },
  args: {
    toaster: createToaster({ placement: 'bottom-end' }),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToastRegion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <ToastPlayground />,
}

export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" style={{ minHeight: 240, padding: 16, background: 'var(--bg)' }}>
      <ToastPlayground />
    </div>
  ),
  globals: {
    backgrounds: {
      value: 'dark',
    },
  },
}
