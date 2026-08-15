import React, { useState } from 'react'
import { Button } from '../ui'
import { Container } from './Container'
import { cn } from '../../../lib/utils/cn'

interface HeaderProps {
  variant?: 'default' | 'transparent'
  ctaText?: string
  onCtaClick?: () => void
}

export function Header({
  variant = 'default',
  ctaText = 'Start a Project',
  onCtaClick,
}: HeaderProps) {
  const [open, setOpen] = useState(false)

  const variantStyles = {
    default: 'bg-white/95 shadow-sm backdrop-blur',
    transparent: 'bg-transparent',
  }

  const navItems = [
    { href: '/#services', label: 'Services' },
    { href: '/#products', label: 'Products' },
    { href: '/about', label: 'About' },
  ]

  const handleLinkClick = (event, href) => {
    if (href === '/') {
      event.preventDefault()
      const target = document.getElementById('solutions')
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/')
        window.dispatchEvent(new PopStateEvent('popstate'))
      }
      setTimeout(() => {
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
      return
    }

    if (href === '/#services') {
      event.preventDefault()
      window.history.pushState({}, '', '/#services')
      window.dispatchEvent(new PopStateEvent('popstate'))
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
      return
    }

    if (href === '/about') {
      event.preventDefault()
      window.history.pushState({}, '', '/about')
      window.dispatchEvent(new PopStateEvent('popstate'))
      return
    }

    if (href === '/#products') {
      event.preventDefault()
      window.history.pushState({}, '', '/#products')
      window.dispatchEvent(new PopStateEvent('popstate'))
      setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    }
  }

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick()
      return
    }

    window.history.pushState({}, '', '/start-project')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b border-neutral-100', variantStyles[variant])}>
      <Container padding="lg" className="py-4">
        <div className="flex items-center justify-between">
          <a href="/" onClick={(event) => handleLinkClick(event, '/')} className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-neutral-900">
            <img src="/reasonable-tech-logo.png?v=4" alt="Reasonable Tech logo" className="h-12 w-12 shrink-0 object-contain" />
            <span>Reasonable Tech</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleLinkClick(event, item.href)}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="md" onClick={handleCtaClick}>
              {ctaText}
            </Button>
          </div>

          <button
            type="button"
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>

        {open && (
          <div className="mt-4 border-t border-neutral-200 pt-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-neutral-700"
                  onClick={(event) => {
                    handleLinkClick(event, item.href)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" size="md" onClick={handleCtaClick}>
                {ctaText}
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
