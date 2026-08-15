import React from 'react'
import { Container } from '../../shared/layout'
import { Card } from '../../shared/ui'

export function Testimonials() {
  const testimonials = [
    { name: 'Michael Chen', role: 'CEO, Enterprise Solutions Inc.', quote: 'Reasonable Technology delivered our core platform in record time with zero downtime.' },
    { name: 'Sarah Johnson', role: 'Founder & Investor, TechVentures', quote: 'Their team understood our vision and built exactly what we needed. Exceptional quality.' },
    { name: 'David Martinez', role: 'CTO, Fortune 500 Company', quote: 'Enterprise-grade work at startup speed. They are now our go-to development partner.' },
  ]

  return (
    <section className="py-20 bg-neutral-50">
      <Container maxWidth="lg" padding="md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900">
          Trusted by Teams
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <p className="text-neutral-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                <p className="text-sm text-neutral-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
