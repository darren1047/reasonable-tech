import React, { ReactNode } from 'react'
import { cn } from '../../../lib/utils/cn'

interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export function Container({
  maxWidth = 'xl',
  padding = 'md',
  children,
  className,
}: ContainerProps) {
  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  const paddingStyles = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
  }

  return (
    <div className={cn('mx-auto w-full', maxWidthStyles[maxWidth], paddingStyles[padding], className)}>
      {children}
    </div>
  )
}
