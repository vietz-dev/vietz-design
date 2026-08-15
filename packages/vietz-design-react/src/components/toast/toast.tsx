import * as React from 'react'
import {
  createToaster as createArkToaster,
  Toast as ArkToast,
  Toaster as ArkToaster,
  type CreateToasterProps,
  type CreateToasterReturn,
  type ToastOptions as ArkToastOptions,
} from '@ark-ui/react/toast'

export const createToaster = (props: CreateToasterProps): CreateToasterReturn => createArkToaster(props)

export type ToastStore = CreateToasterReturn
export type ToastOptions = ArkToastOptions

export interface ToastRegionProps extends Omit<React.ComponentProps<typeof ArkToaster>, 'children'> {
  toaster: ToastStore
}

export function ToastRegion({ toaster, className, ...props }: ToastRegionProps) {
  const classes = ['toast-region', className].filter(Boolean).join(' ')

  return (
    <ArkToaster toaster={toaster} className={classes} {...props}>
      {(toast) => (
        <ArkToast.Root className="toast">
          <div className="toast__body">
            {toast.title ? <ArkToast.Title className="toast__title">{toast.title}</ArkToast.Title> : null}
            {toast.description ? (
              <ArkToast.Description className="toast__description">{toast.description}</ArkToast.Description>
            ) : null}
          </div>
          <div className="toast__actions">
            {toast.action ? (
              <ArkToast.ActionTrigger className="toast__action-trigger">
                {toast.action.label}
              </ArkToast.ActionTrigger>
            ) : null}
            {toast.closable ? <ArkToast.CloseTrigger className="toast__close-trigger">×</ArkToast.CloseTrigger> : null}
          </div>
        </ArkToast.Root>
      )}
    </ArkToaster>
  )
}
