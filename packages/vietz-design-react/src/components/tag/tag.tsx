import * as React from 'react'

export type TagVariant = 'dark' | 'accent'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant
}

export function Tag({ variant = 'dark', className, ...props }: TagProps) {
  const classes = ['tag', className].filter(Boolean).join(' ')

  return <span data-variant={variant} className={classes} {...props} />
}
