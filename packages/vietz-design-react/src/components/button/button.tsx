import * as React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  startIcon,
  endIcon,
  className,
  type,
  children,
  ...props
}: ButtonProps) {
  const classes = ['button', className].filter(Boolean).join(' ')

  return (
    <button
      type={type ?? 'button'}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth ? '' : undefined}
      className={classes}
      {...props}
    >
      {startIcon ? <span className="button__icon" aria-hidden="true">{startIcon}</span> : null}
      {children ? <span className="button__label">{children}</span> : null}
      {endIcon ? <span className="button__icon" aria-hidden="true">{endIcon}</span> : null}
    </button>
  )
}
