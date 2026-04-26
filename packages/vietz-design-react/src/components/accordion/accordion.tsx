import * as React from 'react'
import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import { ChevronDown } from 'lucide-react'

export interface AccordionItem {
  value: string
  title: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}

export interface AccordionProps
  extends Omit<React.ComponentProps<typeof ArkAccordion.Root>, 'children'> {
  items: AccordionItem[]
  indicator?: React.ReactNode
}

export function Accordion({
  items,
  indicator = <ChevronDown size={14} aria-hidden="true" />,
  ...rootProps
}: AccordionProps) {
  return (
    <ArkAccordion.Root collapsible {...rootProps}>
      {items.map((item) => (
        <ArkAccordion.Item key={item.value} value={item.value} disabled={item.disabled}>
          <ArkAccordion.ItemTrigger>
            <span>{item.title}</span>
            <ArkAccordion.ItemIndicator>{indicator}</ArkAccordion.ItemIndicator>
          </ArkAccordion.ItemTrigger>
          <ArkAccordion.ItemContent>
            <div>{item.content}</div>
          </ArkAccordion.ItemContent>
        </ArkAccordion.Item>
      ))}
    </ArkAccordion.Root>
  )
}
