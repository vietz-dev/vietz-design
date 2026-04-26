import * as React from 'react'

export type SurfaceCardVariant = 'static' | 'interactive'

export interface SurfaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SurfaceCardVariant
}

export function SurfaceCard({ variant = 'static', className, ...props }: SurfaceCardProps) {
  const classes = ['surface-card', className].filter(Boolean).join(' ')

  return <div data-variant={variant} className={classes} {...props} />
}
