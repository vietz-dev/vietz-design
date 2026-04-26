import * as React from 'react'
import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group'

export interface RadioGroupItem {
  value: string
  label: React.ReactNode
  description?: React.ReactNode
  disabled?: boolean
}

export interface RadioGroupProps
  extends Omit<React.ComponentProps<typeof ArkRadioGroup.Root>, 'children'> {
  label?: React.ReactNode
  items: RadioGroupItem[]
}

export function RadioGroup({ label, items, className, ...rootProps }: RadioGroupProps) {
  const classes = ['radio-group', className].filter(Boolean).join(' ')

  return (
    <ArkRadioGroup.Root className={classes} {...rootProps}>
      {label ? <ArkRadioGroup.Label className="radio-group__label">{label}</ArkRadioGroup.Label> : null}
      <div className="radio-group__items">
        {items.map((item) => (
          <ArkRadioGroup.Item
            key={item.value}
            className="radio-group__item"
            value={item.value}
            disabled={item.disabled}
          >
            <ArkRadioGroup.ItemHiddenInput />
            <ArkRadioGroup.ItemControl className="radio-group__item-control">
              <ArkRadioGroup.Indicator className="radio-group__indicator" />
            </ArkRadioGroup.ItemControl>
            <span className="radio-group__item-content">
              <ArkRadioGroup.ItemText className="radio-group__item-text">{item.label}</ArkRadioGroup.ItemText>
              {item.description ? (
                <span className="radio-group__item-description">{item.description}</span>
              ) : null}
            </span>
          </ArkRadioGroup.Item>
        ))}
      </div>
    </ArkRadioGroup.Root>
  )
}
