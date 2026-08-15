import React from 'react'
import { Container } from '../../shared/layout'
import { Card } from '../../shared/ui'

export function Features() {
  const features = [
    { icon: '🏗️', title: 'Custom Development', description: 'Tailored software solutions built to your exact business requirements' },
    { icon: '🔐', title: 'Enterprise Security', description: 'Bank-grade security and compliance for sensitive business operations' },
    { icon: '📈', title: 'Scalable Architecture', description: 'Systems designed to grow with your business from day one' },
  ]

  return (
    <section id="features" className="py-20 bg-neutral-50">
      <Container maxWidth="lg" padding="md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary-500 mb-2">{feature.title}</h3>
              <p className="text-neutral-700">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
