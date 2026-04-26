import * as React from 'react'
import { Field as ArkField } from '@ark-ui/react/field'

export type TextareaProps = React.ComponentProps<typeof ArkField.Textarea>

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, rows = 5, ...props },
  ref,
) {
  const classes = ['textarea', className].filter(Boolean).join(' ')

  return <ArkField.Textarea ref={ref} rows={rows} className={classes} {...props} />
})
