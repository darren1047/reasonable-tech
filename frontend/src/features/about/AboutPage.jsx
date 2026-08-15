import React from 'react'
import { Container } from '../shared/layout'
import { Button } from '../shared/ui'

export function AboutPage() {
  const expertise = [
    'Computer Science',
    'Human Resources',
    'Finance',
    'Healthcare',
  ]

  const problemPoints = [
    {
      title: 'High Cost',
      text: 'Custom software can require investments that are difficult for startups and smaller organizations to justify.',
    },
    {
      title: 'Unnecessary Complexity',
      text: 'Businesses are sometimes offered oversized solutions when a simpler, focused system would solve the problem better.',
    },
    {
      title: 'One-Size-Fits-All Solutions',
      text: 'Every organization operates differently. Software should be designed around how your business actually works.',
    },
    {
      title: 'Technical Barriers',
      text: 'Complex terminology, unclear requirements, and unpredictable costs can make technology intimidating.',
    },
  ]

  const values = [
    {
      title: 'Reasonable Price',
      text: 'Fair, transparent pricing that reflects the actual value and scope of the work.',
    },
    {
      title: 'Reasonable Process',
      text: 'Clear communication, practical planning, and no unnecessary complexity.',
    },
    {
      title: 'Reasonable People',
      text: 'We treat our clients as partners. We listen, collaborate, and care about the outcome.',
    },
    {
      title: 'Reasonable Technology',
      text: 'Technology should be purposeful, maintainable, secure, and built to solve a real problem.',
    },
  ]

  const missionPoints = [
    'Make quality software accessible to organizations of every size.',
    'Focus investment on what actually creates business value.',
    'Eliminate unnecessary complexity.',
    'Deliver reliable, professional software without cutting corners.',
  ]

  const comparison = [
    ['Market-driven pricing', 'Value-driven pricing'],
    ['More features = more cost', 'Build what you need'],
    ['Complexity', 'Simplicity'],
    ['Generic solutions', 'Solutions built around you'],
    ['Long development cycles', 'Agile & efficient'],
    ['Technical jargon', 'Clear communication'],
    ['Vendor relationship', 'Long-term partnership'],
  ]

  return (
    <main className="bg-white text-neutral-900">
      <section className="border-b border-neutral-200 bg-gradient-to-b from-primary-50 via-white to-white">
        <Container maxWidth="xl" padding="lg" className="py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                About Us
              </p>
              <h1 className="text-4xl font-extrabold leading-none text-neutral-900 md:text-6xl">
                Software should be reasonable.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700 md:text-xl">
                We believe exceptional software should not be reserved for companies with exceptional budgets.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                We combine strong engineering with real-world business expertise to deliver premium software
                services at a reasonable price.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" onClick={() => window.history.pushState({}, '', '/start-project') || window.dispatchEvent(new PopStateEvent('popstate'))}>Work With Us</Button>
              </div>
            </div>

            <div className="rounded-3xl border border-primary-100 bg-white p-5 shadow-xl shadow-primary-100/60">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary-500" />
                  <span className="h-3 w-3 rounded-full bg-primary-200" />
                  <span className="h-3 w-3 rounded-full bg-primary-100" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-neutral-200 bg-white p-4">
                    <div className="mb-3 h-2 w-12 rounded bg-primary-100" />
                    <div className="mb-2 h-2 w-20 rounded bg-neutral-200" />
                    <div className="mb-2 h-2 w-16 rounded bg-neutral-200" />
                    <div className="h-2 w-14 rounded bg-primary-100" />
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full rounded bg-neutral-200" />
                      <div className="h-2 w-4/5 rounded bg-primary-100" />
                      <div className="h-2 w-3/5 rounded bg-neutral-200" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-4 md:col-span-2">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="h-2 w-16 rounded bg-neutral-200" />
                      <div className="h-2 w-10 rounded bg-primary-100" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="block h-16 rounded-lg bg-primary-50" />
                      <span className="block h-16 rounded-lg bg-primary-100" />
                      <span className="block h-16 rounded-lg bg-neutral-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container maxWidth="xl" padding="lg">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl">
              Why We Exist
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
              <p>
                Reasonable Tech was born from a simple belief: exceptional software should not be reserved
                for companies with exceptional budgets.
              </p>
              <p>
                We are a team of computer science engineers and technology professionals with interdisciplinary
                expertise across areas including <strong className="font-semibold text-neutral-900">human resources, finance, healthcare, and business operations</strong>.
              </p>
              <p>
                This combination allows us to look beyond code and understand the real problems businesses are
                trying to solve.
              </p>
              <p>
                We saw an industry where software development can become unnecessarily expensive, complicated,
                and inaccessible—particularly for startups, small businesses, and organizations without massive
                technology budgets.
              </p>
              <p className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                We believe there is a better way.
              </p>
              <p>
                Our purpose is to challenge the idea that premium software must come with a premium price tag.
              </p>
              <p>
                We combine strong engineering, practical design, and a deep understanding of business needs to
                deliver <strong className="font-semibold text-neutral-900">high-quality software at a reasonable price.</strong>
              </p>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-primary-200 bg-primary-50/60 px-6 py-8 md:px-10 md:py-12">
            <p className="text-2xl font-semibold text-neutral-900 md:text-4xl">
              Premium service. Reasonable price. No unnecessary complexity.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <Container maxWidth="xl" padding="lg">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">
              Our expertise
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-5xl">
              Technology Meets Business Expertise
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              Great software requires more than technical skills. It requires an understanding of the people,
              processes, and industries the technology is designed to support.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-lg bg-primary-50 ring-1 ring-primary-100" />
                <h3 className="text-xl font-bold text-neutral-900">{item}</h3>
                <div className="mt-3 h-px w-12 bg-primary-200" />
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Software built with a practical understanding of real-world operations and decision-making.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#2f234c] py-16 text-white md:py-20">
        <Container maxWidth="xl" padding="lg">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-100">The problem we see</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">The Problem We See</h2>
            <p className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Software should solve problems—not create new ones.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {problemPoints.map((point) => (
              <div key={point.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-bold text-white md:text-2xl">{point.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-primary-50 md:mt-0 md:text-base">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xl font-medium text-primary-50">We believe the industry can do better.</p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container maxWidth="xl" padding="lg">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Our belief</p>
            <h2 className="mt-3 text-4xl font-extrabold text-neutral-900 md:text-7xl">
              Great software is not a luxury<br className="hidden md:block" /> for the few.
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-2xl font-medium leading-tight text-neutral-800 md:text-4xl">
              It is a tool that should be accessible to everyone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <p className="text-lg leading-relaxed text-neutral-700">
                Every organization deserves access to software that is secure, reliable, scalable, and genuinely useful—regardless of its size or budget.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8">
              <p className="text-lg leading-relaxed text-neutral-700">
                That doesn't mean cutting corners. It means being smarter about what we build, how we build it, and where we invest resources.
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-3xl font-extrabold text-neutral-900 md:text-5xl">
            We build what you need, the way you need it, at a price that makes sense.
          </p>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <Container maxWidth="xl" padding="lg">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Our mission</p>
          <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-5xl">
            Democratizing Access to Quality Software
          </h2>
          <p className="mt-6 max-w-5xl text-2xl font-medium leading-tight text-neutral-800 md:text-4xl">
            To make high-quality software development more accessible through exceptional engineering,
            practical solutions, and fair pricing.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {missionPoints.map((point, index) => (
              <div key={point} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-700">0{index + 1}</p>
                <p className="mt-3 text-base font-semibold leading-relaxed text-neutral-900">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container maxWidth="xl" padding="lg">
          <h2 className="text-3xl font-extrabold text-neutral-900 md:text-5xl">
            A More Reasonable Way to Build Software
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {comparison.map(([left, right], index) => (
              <div key={`${left}-${right}`} className="grid gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 md:grid-cols-2">
                <div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">Traditional approach</p>
                  <p className="mt-3 text-lg font-medium text-neutral-900">{left}</p>
                </div>
                <div className="rounded-xl bg-primary-50 p-4 ring-1 ring-primary-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">Reasonable Tech</p>
                  <p className="mt-3 text-lg font-medium text-neutral-900">{right}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <Container maxWidth="xl" padding="lg">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Why “reasonable”?</p>
            <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-5xl">
              Reasonable isn’t just about price. It’s about how we think.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="text-xl font-bold text-neutral-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{value.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xl font-medium text-neutral-800 md:text-2xl">
            Reasonable Tech means using common sense in an industry that can sometimes overcomplicate things.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container maxWidth="xl" padding="lg">
          <div className="rounded-3xl border border-primary-200 bg-primary-50/80 px-6 py-10 md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Our promise</p>
            <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-5xl">
              Premium service. Reasonable price.
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-neutral-700 md:text-xl">
              We believe quality and affordability can coexist.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl bg-white p-4 ring-1 ring-primary-100">
                <p className="text-sm font-bold text-neutral-900">Quality</p>
                <p className="mt-2 text-sm text-neutral-600">Reliable, maintainable, professional software.</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-primary-100">
                <p className="text-sm font-bold text-neutral-900">Fairness</p>
                <p className="mt-2 text-sm text-neutral-600">Pricing that reflects the work and value involved.</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-primary-100">
                <p className="text-sm font-bold text-neutral-900">Transparency</p>
                <p className="mt-2 text-sm text-neutral-600">You understand what we are building and why.</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-primary-100">
                <p className="text-sm font-bold text-neutral-900">Efficiency</p>
                <p className="mt-2 text-sm text-neutral-600">Focused development that respects your time and resources.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-900 py-16 text-white md:py-20">
        <Container maxWidth="xl" padding="lg">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-100">The future</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">The Future We Want to Build</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
              We envision a technology landscape where businesses do not have to choose between quality and affordability.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              'Startups can turn ideas into products without enormous upfront investments.',
              'Small businesses can use custom software to compete more effectively.',
              'Growing organizations can replace inefficient processes with technology designed for them.',
              'Non-technical founders can bring ideas to life without being overwhelmed by technical complexity.',
              'Organizations can choose quality without excessive cost.',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-neutral-200">
                ✓ {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-3xl font-extrabold text-white md:text-5xl">
            That is the future we are building at Reasonable Tech.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container maxWidth="xl" padding="lg">
          <div className="rounded-[2rem] border border-primary-200 bg-gradient-to-r from-primary-50 via-white to-primary-50 px-6 py-10 md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Start a project</p>
            <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-5xl">
              Have a Business Challenge?
            </h2>
            <p className="mt-5 max-w-3xl text-xl text-neutral-700">
              Let’s turn it into software that works.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => { window.history.pushState({}, '', '/start-project'); window.dispatchEvent(new PopStateEvent('popstate')); }}>Start a Project</Button>
              <Button variant="outline" size="lg" onClick={() => { window.history.pushState({}, '', '/start-project'); window.dispatchEvent(new PopStateEvent('popstate')); }}>Start a Conversation</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
