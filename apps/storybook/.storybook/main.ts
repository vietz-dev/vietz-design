import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    const rollupOptions = config.build?.rollupOptions
    const previousOnWarn = rollupOptions?.onwarn

    return {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...rollupOptions,
          onwarn(warning, defaultHandler) {
            if (
              warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
              typeof warning.message === 'string' &&
              warning.message.includes('"use client"')
            ) {
              return
            }

            if (typeof previousOnWarn === 'function') {
              previousOnWarn(warning, defaultHandler)
              return
            }

            defaultHandler(warning)
          },
        },
      },
    }
  },
}

export default config
