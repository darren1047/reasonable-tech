import React from 'react'
import { Container } from '../../shared/layout'
import { Button } from '../../shared/ui'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 md:py-32">
      <Container maxWidth="lg" padding="md">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Enterprise Software Built Smart
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
            We believe great software shouldn't break the bank. We're here to disrupt the industry and make technology accessible to everyone — one fair-priced solution at a time.
          </p>
          <p className="text-neutral-600 mb-10 italic">
            Custom web solutions for enterprise businesses and forward-thinking investors. Scalable, secure, production-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              View Products →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
