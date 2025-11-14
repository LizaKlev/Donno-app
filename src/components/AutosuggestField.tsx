'use client'

import React, { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion'

const COMMON_COUNTRIES = [
  'USA',
  'UK',
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Canada',
  'Australia',
  'Japan',
  'South Korea',
  'India',
  'Brazil',
  'Mexico',
  'Russia',
  'China',
  'Sweden',
  'Norway',
  'Denmark',
  'Netherlands',
  'Belgium',
  'Poland',
  'Czech Republic',
  'Hungary',
  'Romania',
  'Greece',
  'Turkey',
  'Argentina',
  'Chile',
  'Colombia',
  'New Zealand',
]

interface AutosuggestFieldProps {
  label?: string
  selectedValue?: string
  onSelectionChange?: (selected: string[]) => void
  options?: string[]
  placeholder?: string
}

export const AutosuggestField: React.FC<AutosuggestFieldProps> = ({
  label = 'Country',
  selectedValue,
  onSelectionChange,
  options,
  placeholder,
}) => {
  const availableOptions = options || COMMON_COUNTRIES
  const defaultPlaceholder = placeholder || 'Type to search countries...'

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  })
  const inputContainerRef = useRef<HTMLDivElement>(null)

  const filteredOptions = availableOptions.filter(
    (item) =>
      item.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedItems.includes(item)
  )

  useEffect(() => {
    if (showSuggestions && inputContainerRef.current) {
      const rect = inputContainerRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      })
    }
  }, [showSuggestions, selectedItems, inputValue])

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedItems)
    }
  }, [selectedItems, onSelectionChange])

  const handleItemSelect = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item])
      setInputValue('')
      setShowSuggestions(false)
    }
  }

  const handleItemRemove = (item: string) => {
    setSelectedItems(selectedItems.filter((i) => i !== item))
  }

  const handleClearAll = () => {
    setSelectedItems([])
    setInputValue('')
    setShowSuggestions(false)
  }

  const getDisplayValue = () => {
    // Always show selected items if any are selected
    if (selectedItems.length > 0) {
      if (selectedItems.length <= 2) {
        return selectedItems.join(', ')
      }
      return `${selectedItems.slice(0, 2).join(', ')}...`
    }
    // If no items selected, show "Any" or use selectedValue as fallback
    return selectedValue || 'Any'
  }

  return (
    <Accordion type='single' collapsible className='py-0 pl-5.5'>
      <AccordionItem value='item-2' className='p-0'>
        <AccordionTrigger className='pt-2.5 pb-2 hover:bg-white-4 rounded-full w-full items-baseline px-3'>
          <div className='flex gap-1.5 items-center flex-1'>
            <span>{label}</span>
            <span className='text-white/70 ml-auto mr-2'>
              {getDisplayValue()}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className='p-0 overflow-visible'>
          <div className='pl-8.5 pr-2.5 pb-2 relative'>
            <div
              ref={inputContainerRef}
              className='flex flex-wrap gap-1.5 items-center w-full rounded-full bg-white-4 px-3 py-1.5 border border-transparent focus-within:bg-white-12 focus-within:border-white-12 transition-colors'
            >
              {selectedItems.map((item) => (
                <Badge
                  key={item}
                  variant='secondary'
                  className='text-xs px-2 py-0.5 flex items-center gap-1'
                >
                  {item}
                  <button
                    type='button'
                    onClick={() => handleItemRemove(item)}
                    className='hover:opacity-70 transition-opacity'
                    aria-label={`Remove ${item}`}
                  >
                    <X className='size-3' />
                  </button>
                </Badge>
              ))}
              <Input
                type='text'
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value)
                  setShowSuggestions(true)
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => {
                  // Delay to allow click on suggestion
                  setTimeout(() => setShowSuggestions(false), 200)
                }}
                placeholder={
                  selectedItems.length === 0 ? defaultPlaceholder : ''
                }
                className='flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:bg-transparent p-0 h-auto text-sm'
              />
              {selectedItems.length > 0 && (
                <button
                  type='button'
                  onClick={handleClearAll}
                  className='ml-1 hover:opacity-70 transition-opacity shrink-0'
                  aria-label='Clear all selections'
                >
                  <X className='size-4' />
                </button>
              )}
            </div>
            {showSuggestions && filteredOptions.length > 0 && (
              <div
                className='fixed bg-background rounded-lg border border-white-12 max-h-48 overflow-y-auto shadow-lg'
                style={{
                  top: `${dropdownPosition.top}px`,
                  left: `${dropdownPosition.left}px`,
                  width: `${dropdownPosition.width}px`,
                  zIndex: 9999,
                }}
              >
                {filteredOptions.map((item) => (
                  <button
                    key={item}
                    type='button'
                    onClick={() => handleItemSelect(item)}
                    className='w-full text-left px-3 py-2 hover:bg-white-12 text-sm transition-colors'
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
