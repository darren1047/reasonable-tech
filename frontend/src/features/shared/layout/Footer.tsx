import React from 'react'
import { Container } from './Container'

export function Footer() {
  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/#products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/start-project', label: 'Start a Project' },
  ]

  const handleLinkClick = (event, href) => {
    if (href === '/#services') {
      event.preventDefault()
      window.history.pushState({}, '', '/#services')
      window.dispatchEvent(new PopStateEvent('popstate'))
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
      return
    }

    if (href === '/#products') {
      event.preventDefault()
      window.history.pushState({}, '', '/#products')
      window.dispatchEvent(new PopStateEvent('popstate'))
      setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
      return
    }

    if (href === '/about') {
      event.preventDefault()
      window.history.pushState({}, '', '/about')
      window.dispatchEvent(new PopStateEvent('popstate'))
      return
    }

    if (href === '/start-project') {
      event.preventDefault()
      window.history.pushState({}, '', '/start-project')
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container padding="lg" className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="text-xl font-extrabold text-neutral-900">Reasonable Tech</p>
            <p className="mt-3 max-w-xl text-neutral-600">
              Great software should not break the bank.
            </p>
            <p className="mt-6 text-sm text-neutral-500">&copy; 2026 Reasonable Tech. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-medium text-neutral-700 md:justify-end">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.href)}
                className="transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
