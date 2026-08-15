import React, { useState } from 'react'
import { Button } from '../shared/ui'
import { Container } from '../shared/layout'

const initialForm = {
  name: '',
  email: '',
  company: '',
  needType: 'New software',
  projectSummary: '',
  budget: '',
  timeline: '',
}

export function StartProjectPage() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const handleNavigateHome = () => {
    window.history.pushState({}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white">
        <Container maxWidth="lg" padding="lg" className="py-20 md:py-28">
          <div className="rounded-3xl border border-primary-200 bg-primary-50 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Project received</p>
            <h1 className="mt-4 text-3xl font-extrabold text-neutral-900 md:text-5xl">
              Thanks for reaching out.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-700 md:text-xl">
              We’ve received your project details. We’ll review your requirements and get back to you to discuss the next steps.
            </p>
            <div className="mt-8">
              <Button size="lg" onClick={handleNavigateHome}>Return Home</Button>
            </div>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="border-b border-neutral-200 bg-white">
        <Container maxWidth="xl" padding="lg" className="py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                Start a project
              </p>
              <h1 className="text-4xl font-extrabold leading-tight text-neutral-900 md:text-6xl">
                Let’s Build Something Reasonable.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700 md:text-xl">
                Tell us what you’re trying to build, improve, or solve. We’ll learn about your needs and discuss the most practical way forward.
              </p>

              <div className="mt-8 space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">Typical engagements</p>
                  <p className="mt-2 text-base font-medium text-neutral-800">Custom software, internal tools, automation, web apps, and operational platforms.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">Response time</p>
                  <p className="mt-2 text-base font-medium text-neutral-800">We’ll review your project and follow up with next steps.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2 md:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-800">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-800">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="company" className="text-sm font-medium text-neutral-800">Company / Organization</label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange('company')}
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    placeholder="Organization or company name"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="needType" className="text-sm font-medium text-neutral-800">What do you need?</label>
                  <select
                    id="needType"
                    value={formData.needType}
                    onChange={handleChange('needType')}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  >
                    <option>New software</option>
                    <option>Improve existing software</option>
                    <option>Business automation</option>
                    <option>Web application</option>
                    <option>Enterprise software</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="projectSummary" className="text-sm font-medium text-neutral-800">Tell us about your project</label>
                  <textarea
                    id="projectSummary"
                    value={formData.projectSummary}
                    onChange={handleChange('projectSummary')}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    placeholder="Share your goals, current challenges, and what success looks like."
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label htmlFor="budget" className="text-sm font-medium text-neutral-800">Approximate budget</label>
                  <input
                    id="budget"
                    type="text"
                    value={formData.budget}
                    onChange={handleChange('budget')}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    placeholder="Optional"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label htmlFor="timeline" className="text-sm font-medium text-neutral-800">Desired timeline</label>
                  <input
                    id="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={handleChange('timeline')}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-neutral-500">We’ll reach out after reviewing your inquiry.</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Submit Project →
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </main>
  )
}
