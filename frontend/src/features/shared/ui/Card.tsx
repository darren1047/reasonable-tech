import React, { ReactNode } from 'react'
import { cn } from '../../../lib/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200', className)}>
      {children}
    </div>
  )
}
