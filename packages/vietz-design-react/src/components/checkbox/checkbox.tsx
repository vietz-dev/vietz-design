import * as React from 'react'
import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox'

export interface CheckboxProps
  extends Omit<React.ComponentProps<typeof ArkCheckbox.Root>, 'children'> {
  children?: React.ReactNode
  helperText?: React.ReactNode
}

export function Checkbox({ children, helperText, className, ...rootProps }: CheckboxProps) {
  const classes = ['checkbox', className].filter(Boolean).join(' ')

  return (
    <ArkCheckbox.Root className={classes} {...rootProps}>
      <ArkCheckbox.HiddenInput />
      <ArkCheckbox.Control className="checkbox__control">
        <ArkCheckbox.Indicator className="checkbox__indicator">
          <span className="checkbox__checkmark" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="checkbox__indeterminate" aria-hidden="true" />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      {(children || helperText) ? (
        <span className="checkbox__content">
          {children ? <ArkCheckbox.Label className="checkbox__label">{children}</ArkCheckbox.Label> : null}
          {helperText ? <span className="checkbox__helper-text">{helperText}</span> : null}
        </span>
      ) : null}
    </ArkCheckbox.Root>
  )
}
