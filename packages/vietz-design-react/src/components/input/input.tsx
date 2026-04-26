import * as React from 'react'
import { Field as ArkField } from '@ark-ui/react/field'

export type InputProps = React.ComponentProps<typeof ArkField.Input>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  const classes = ['input', className].filter(Boolean).join(' ')

  return <ArkField.Input ref={ref} className={classes} {...props} />
})
