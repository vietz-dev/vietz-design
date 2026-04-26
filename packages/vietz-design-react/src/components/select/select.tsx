import * as React from 'react'
import { Select as ArkSelect, createListCollection } from '@ark-ui/react/select'
import { ChevronDown, Check } from 'lucide-react'

export interface SelectItem {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectProps
  extends Omit<React.ComponentProps<typeof ArkSelect.Root<SelectItem>>, 'children' | 'collection'> {
  items: SelectItem[]
  placeholder?: string
}

export function Select({
  items,
  placeholder = 'Select an option',
  className,
  positioning = { sameWidth: true },
  ...rootProps
}: SelectProps) {
  const classes = ['select', className].filter(Boolean).join(' ')

  const collection = React.useMemo(
    () =>
      createListCollection<SelectItem>({
        items,
        itemToString: (item) => item.label,
        itemToValue: (item) => item.value,
      }),
    [items],
  )

  return (
    <ArkSelect.Root className={classes} collection={collection} positioning={positioning} {...rootProps}>
      <ArkSelect.HiddenSelect className="select__hidden-select" />
      <ArkSelect.Control className="select__control">
        <ArkSelect.Trigger className="select__trigger">
          <ArkSelect.ValueText className="select__value-text" placeholder={placeholder} />
          <ArkSelect.Indicator className="select__indicator">
            <ChevronDown size={16} aria-hidden="true" />
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
      </ArkSelect.Control>
      <ArkSelect.Positioner className="select__positioner">
        <ArkSelect.Content className="select__content">
          {collection.items.map((item) => (
            <ArkSelect.Item key={item.value} item={item} className="select__item">
              <ArkSelect.ItemText className="select__item-text">{item.label}</ArkSelect.ItemText>
              <ArkSelect.ItemIndicator className="select__item-indicator">
                <Check size={14} aria-hidden="true" />
              </ArkSelect.ItemIndicator>
            </ArkSelect.Item>
          ))}
        </ArkSelect.Content>
      </ArkSelect.Positioner>
    </ArkSelect.Root>
  )
}
