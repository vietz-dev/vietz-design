import * as React from 'react'
import { Switch as ArkSwitch } from '@ark-ui/react/switch'

export interface SwitchProps extends Omit<React.ComponentProps<typeof ArkSwitch.Root>, 'children'> {
  children?: React.ReactNode
  helperText?: React.ReactNode
}

export function Switch({ children, helperText, className, ...rootProps }: SwitchProps) {
  const classes = ['switch', className].filter(Boolean).join(' ')

  return (
    <ArkSwitch.Root className={classes} {...rootProps}>
      <ArkSwitch.HiddenInput />
      <ArkSwitch.Control className="switch__control">
        <ArkSwitch.Thumb className="switch__thumb" />
      </ArkSwitch.Control>
      {(children || helperText) ? (
        <span className="switch__content">
          {children ? <ArkSwitch.Label className="switch__label">{children}</ArkSwitch.Label> : null}
          {helperText ? <span className="switch__helper-text">{helperText}</span> : null}
        </span>
      ) : null}
    </ArkSwitch.Root>
  )
}
