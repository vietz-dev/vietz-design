import * as React from 'react'
import { Fieldset as ArkFieldset } from '@ark-ui/react/fieldset'

export interface FieldsetProps
  extends Omit<React.ComponentProps<typeof ArkFieldset.Root>, 'children'> {
  legend?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  children: React.ReactNode
}

export function Fieldset({
  legend,
  helperText,
  errorText,
  className,
  children,
  ...rootProps
}: FieldsetProps) {
  const classes = ['fieldset', className].filter(Boolean).join(' ')

  return (
    <ArkFieldset.Root className={classes} {...rootProps}>
      {legend ? <ArkFieldset.Legend className="fieldset__legend">{legend}</ArkFieldset.Legend> : null}
      <div className="fieldset__content">{children}</div>
      {helperText ? <ArkFieldset.HelperText className="fieldset__helper-text">{helperText}</ArkFieldset.HelperText> : null}
      {errorText ? <ArkFieldset.ErrorText className="fieldset__error-text">{errorText}</ArkFieldset.ErrorText> : null}
    </ArkFieldset.Root>
  )
}
