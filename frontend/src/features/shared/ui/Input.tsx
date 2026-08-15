import React from 'react'
import { cn } from '../../../lib/utils/cn'

interface InputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  className?: string
}

export function Input({ placeholder, value, onChange, disabled, className }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      className={cn(
        'w-full px-4 py-2 border-2 border-neutral-200 rounded-lg',
        'focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-50',
        'disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed',
        'transition-all duration-200',
        className
      )}
    />
  )
}
