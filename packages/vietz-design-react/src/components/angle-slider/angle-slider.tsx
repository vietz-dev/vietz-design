import * as React from 'react'
import { AngleSlider as ArkAngleSlider } from '@ark-ui/react/angle-slider'

export interface AngleSliderProps
  extends Omit<React.ComponentProps<typeof ArkAngleSlider.Root>, 'children'> {
  label?: React.ReactNode
  unitLabel?: React.ReactNode
  markerStep?: number
  showMarkers?: boolean
  size?: number
}

export function AngleSlider({
  label,
  unitLabel = 'degrees',
  markerStep = 45,
  showMarkers = false,
  size = 160,
  className,
  style,
  ...rootProps
}: AngleSliderProps) {
  const classes = ['angle-slider', className].filter(Boolean).join(' ')

  const markerValues = React.useMemo(() => {
    if (!showMarkers || markerStep <= 0) return []

    const values: number[] = []

    for (let value = 0; value < 360; value += markerStep) {
      values.push(value)
    }

    return values
  }, [markerStep, showMarkers])

  return (
    <ArkAngleSlider.Root
      className={classes}
      style={{ ['--angle-slider-size' as string]: `${size}px`, ...style }}
      {...rootProps}
    >
      {label ? <ArkAngleSlider.Label className="angle-slider__label">{label}</ArkAngleSlider.Label> : null}
      <ArkAngleSlider.HiddenInput />
      <ArkAngleSlider.Control className="angle-slider__control">
        {showMarkers ? (
          <ArkAngleSlider.MarkerGroup className="angle-slider__marker-group">
            {markerValues.map((value) => (
              <ArkAngleSlider.Marker key={value} value={value} className="angle-slider__marker" />
            ))}
          </ArkAngleSlider.MarkerGroup>
        ) : null}
        <div className="angle-slider__center-text" aria-hidden="true">
          <ArkAngleSlider.ValueText className="angle-slider__value-text" />
          <span className="angle-slider__unit-label">{unitLabel}</span>
        </div>
        <ArkAngleSlider.Thumb className="angle-slider__thumb" />
      </ArkAngleSlider.Control>
    </ArkAngleSlider.Root>
  )
}
