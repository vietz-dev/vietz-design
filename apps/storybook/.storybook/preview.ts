import type { Preview } from '@storybook/react-vite'
import '@vietz-dev/design-react/styles.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: 'light', value: 'oklch(97% 0.012 85)' },
        dark: { name: 'dark', value: 'oklch(13% 0.008 255)' }
      }
    },
    layout: 'padded',
  },

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
}

export default preview
