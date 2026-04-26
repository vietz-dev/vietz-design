import * as React from 'react'
import { Field as ArkField } from '@ark-ui/react/field'

export interface FieldProps
  extends Omit<React.ComponentProps<typeof ArkField.Root>, 'children'> {
  label?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  requiredIndicator?: React.ReactNode
  hideRequiredIndicator?: boolean
  children: React.ReactNode
}

export function Field({
  label,
  helperText,
  errorText,
  requiredIndicator = '*',
  hideRequiredIndicator = false,
  className,
  children,
  required,
  ...rootProps
}: FieldProps) {
  const classes = ['field', className].filter(Boolean).join(' ')

  return (
    <ArkField.Root className={classes} required={required} {...rootProps}>
      {label ? (
        <ArkField.Label className="field__label">
          <span>{label}</span>
          {required && !hideRequiredIndicator ? (
            <ArkField.RequiredIndicator className="field__required-indicator">
              {requiredIndicator}
            </ArkField.RequiredIndicator>
          ) : null}
        </ArkField.Label>
      ) : null}
      {children}
      {helperText ? <ArkField.HelperText className="field__helper-text">{helperText}</ArkField.HelperText> : null}
      {errorText ? <ArkField.ErrorText className="field__error-text">{errorText}</ArkField.ErrorText> : null}
    </ArkField.Root>
  )
}
