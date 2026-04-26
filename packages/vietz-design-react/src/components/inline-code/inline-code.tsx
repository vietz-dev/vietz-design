import * as React from 'react'

export type InlineCodeProps = React.HTMLAttributes<HTMLElement>

export function InlineCode({ className, ...props }: InlineCodeProps) {
  const classes = ['inline-code', className].filter(Boolean).join(' ')

  return <code className={classes} {...props} />
}
