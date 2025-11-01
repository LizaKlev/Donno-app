'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from 'donno-app/lib/utils'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  onValueChange,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const initialValues = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  const [internalValues, setInternalValues] =
    React.useState<number[]>(initialValues)

  // Keep internal state in sync when controlled externally
  React.useEffect(() => {
    if (Array.isArray(value)) {
      setInternalValues(value)
    }
  }, [value])

  const displayedValues = Array.isArray(value) ? value : internalValues

  const handleValueChange = (next: number[]) => {
    if (!Array.isArray(value)) {
      setInternalValues(next)
    }
    onValueChange?.(next)
  }

  const percentFor = (v: number) =>
    max - min > 0 ? ((v - min) / (max - min)) * 100 : 0

  return (
    <div>
      <div className='flex justify-between mb-2'>
        <p>1200</p>
        <p>1200</p>
      </div>

      <SliderPrimitive.Root
        data-slot='slider'
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        onValueChange={handleValueChange}
        className={cn(
          'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
          className
        )}
        {...props}
      >
        {/* labels above thumbs */}
        {displayedValues.map((v, i) => (
          <div
            key={`label-${i}`}
            className='absolute -top-6 text-sm'
            style={{
              left: `${percentFor(v)}%`,
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
            }}
          >
            {v}
          </div>
        ))}

        <SliderPrimitive.Track
          data-slot='slider-track'
          className={cn(
            'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5'
          )}
        >
          <SliderPrimitive.Range
            data-slot='slider-range'
            className={cn(
              'bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
            )}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: displayedValues.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot='slider-thumb'
            key={index}
            className='border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50'
          />
        ))}
      </SliderPrimitive.Root>
    </div>
  )
}

export { Slider }
