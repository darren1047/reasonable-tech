import React, { useEffect, useState } from 'react'
import { Header, Footer, Container } from './features/shared/layout'
import { Button, Card } from './features/shared/ui'
import { AboutPage } from './features/about/AboutPage'
import { StartProjectPage } from './features/start-project/StartProjectPage'

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  const navigateTo = (target) => {
    window.history.pushState({}, '', target)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  useEffect(() => {
    const handleRouteChange = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [path])

  if (path === '/about') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <AboutPage />
        </main>
        <Footer />
      </div>
    )
  }

  if (path === '/start-project') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <StartProjectPage />
        </main>
        <Footer />
      </div>
    )
  }

  const valueProps = [
    {
      index: '01',
      title: 'Fair Pricing',
      text: 'High-quality software without unnecessary costs.',
    },
    {
      index: '02',
      title: 'Smart Engineering',
      text: 'Practical solutions designed around real business needs.',
    },
    {
      index: '03',
      title: 'Built To Scale',
      text: 'Reliable technology that grows with your business.',
    },
  ]

  const services = [
    {
      title: 'Custom Software Development',
      text: 'Business applications designed around your unique requirements.',
    },
    {
      title: 'Web & Application Development',
      text: 'Modern, responsive applications built for performance and usability.',
    },
    {
      title: 'Enterprise Solutions',
      text: 'Secure and scalable systems for complex business operations.',
    },
    {
      title: 'Cloud & Software Architecture',
      text: 'Reliable architectures designed for performance, security, and long-term growth.',
    },
  ]

  const projects = [
    {
      name: 'NATIVEENG.ORG',
      category: 'OUR PRODUCT',
      description: 'A software platform built and developed by Reasonable Tech.',
      url: 'https://www.nativeeng.org/',
      preview: '/nativeeng-product.svg',
      isComingSoon: false,
    },
    {
      name: 'SERVANTWORK',
      category: 'OUR PRODUCT · COMING SOON',
      description: 'A software product currently being developed by Reasonable Tech.',
      url: null,
      preview: null,
      isComingSoon: true,
    },
  ]

  const process = [
    { step: '01', title: 'Discover', text: 'Understand the business problem.' },
    { step: '02', title: 'Design', text: 'Define the right technical and user experience solution.' },
    { step: '03', title: 'Build', text: 'Develop, test, and refine the software.' },
    { step: '04', title: 'Launch & Grow', text: 'Deploy, monitor, improve, and scale.' },
  ]

  const technologies = [
    'Web Development',
    'Backend Systems',
    'Cloud Infrastructure',
    'Databases',
    'APIs & Integrations',
    'Security',
    'Automation',
    'Enterprise Applications',
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section id="solutions" className="border-b border-neutral-100 bg-gradient-to-b from-primary-50/70 via-white to-white">
          <Container maxWidth="xl" padding="lg" className="py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                  Reasonable Tech
                </p>
                <h1 className="text-4xl font-extrabold leading-tight text-neutral-900 md:text-6xl">
                  Great Software. Reasonable Price.
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-neutral-700 md:text-xl">
                  Enterprise-quality software without the enterprise price tag.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                  We design and build secure, scalable software solutions that help businesses work smarter,
                  grow faster, and get more value from technology.
                </p>
                <p className="mt-6 max-w-2xl border-l-4 border-primary-500 pl-4 text-neutral-700">
                  We believe great software should not break the bank. We are here to make technology
                  accessible to everyone, one fair-priced solution at a time.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button size="lg" onClick={() => navigateTo('/start-project')}>Start a Project</Button>
                  <Button variant="outline" size="lg" onClick={() => navigateTo('/#products')}>Explore Products</Button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-primary-100 bg-white p-5 shadow-2xl shadow-primary-100/50">
                  <div className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-3">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <span className="font-mono text-xs text-neutral-500">platform-architecture.ts</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs md:text-sm">
                    <div className="h-3 w-3/4 rounded bg-primary-100" />
                    <div className="h-3 w-5/6 rounded bg-neutral-100" />
                    <div className="h-3 w-2/3 rounded bg-primary-100" />
                    <div className="h-3 w-4/5 rounded bg-neutral-100" />
                    <div className="h-3 w-1/2 rounded bg-primary-100" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3">
                      <p className="text-xs font-semibold text-neutral-500">API Throughput</p>
                      <p className="mt-1 text-xl font-bold text-neutral-900">99.98%</p>
                    </div>
                    <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3">
                      <p className="text-xs font-semibold text-neutral-500">Deploy Velocity</p>
                      <p className="mt-1 text-xl font-bold text-neutral-900">3.4x</p>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-5 -left-6 hidden rounded-xl border border-primary-200 bg-white p-3 shadow-lg lg:block">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Architecture</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
                    <span className="h-2 w-2 rounded-full bg-primary-500" />
                    API
                    <span className="h-px w-6 bg-neutral-300" />
                    Services
                    <span className="h-px w-6 bg-neutral-300" />
                    Database
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-neutral-100 bg-white py-10">
          <Container maxWidth="xl" padding="lg">
            <div className="grid gap-6 md:grid-cols-3">
              {valueProps.map((item) => (
                <div key={item.index} className="rounded-xl border border-neutral-200 bg-white p-5">
                  <p className="text-sm font-semibold text-primary-700">{item.index}</p>
                  <h3 className="mt-2 text-xl font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="services" className="bg-neutral-50 py-16 md:py-20">
          <Container maxWidth="xl" padding="lg">
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-extrabold text-neutral-900 md:text-5xl">What We Build</h2>
              <p className="max-w-xl text-neutral-600">
                Software solutions shaped by real operational needs, built for reliability and long-term value.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="border border-neutral-200 bg-white p-7">
                  <div className="mb-4 h-1.5 w-10 rounded bg-primary-500" />
                  <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                  <p className="mt-2 text-neutral-600">{service.text}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container maxWidth="xl" padding="lg">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Why Reasonable Tech?</p>
                  <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-5xl">
                    The practical alternative to expensive, complicated software.
                  </h2>
                </div>
                <div className="text-lg leading-relaxed text-neutral-700">
                  We are a team of computer science engineers with interdisciplinary expertise in human resources,
                  finance, healthcare, and business operations. We combine technology and business understanding to
                  build premium software without unnecessary complexity or cost.
                  <div className="mt-6">
                    <a href="/about" className="inline-flex items-center gap-2 text-base font-semibold text-primary-700 transition-colors hover:text-primary-500">
                      Discover Our Story →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="products" className="bg-white py-16 md:py-20">
          <Container maxWidth="xl" padding="lg">
            <h2 className="text-3xl font-extrabold text-neutral-900 md:text-5xl">Products We've Built</h2>
            <p className="mt-3 max-w-3xl text-neutral-600">
              Software we design, develop, and build ourselves.
            </p>
            <p className="mt-4 max-w-4xl text-neutral-600">
              Beyond software development services, Reasonable Tech builds its own digital products to solve real-world problems and explore new ideas.
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className={`group flex h-full flex-col overflow-hidden rounded-[28px] border border-primary-100 bg-gradient-to-b from-white to-primary-50/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-100/60 ${index % 2 === 1 ? 'lg:translate-y-6' : ''}`}
                >
                  <div className="relative h-[260px] overflow-hidden border-b border-primary-100 bg-neutral-50 md:h-[300px]">
                    {project.isComingSoon ? (
                      <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.14),_transparent_28%),linear-gradient(135deg,#f5f3ff_0%,#eef2ff_45%,#f8fafc_100%)] p-6">
                        <div className="relative w-full max-w-md rounded-2xl border border-primary-200 bg-white/80 p-4 shadow-lg shadow-primary-100/40 backdrop-blur-sm">
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex gap-2">
                              <span className="h-2.5 w-2.5 rounded-full bg-primary-300" />
                              <span className="h-2.5 w-2.5 rounded-full bg-primary-200" />
                              <span className="h-2.5 w-2.5 rounded-full bg-primary-100" />
                            </div>
                            <span className="rounded-full border border-primary-200 bg-primary-50 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-700">
                              PRODUCT DETAILS CONFIDENTIAL
                            </span>
                          </div>
                          <div className="grid gap-3">
                            <div className="h-16 rounded-xl bg-gradient-to-r from-primary-100 via-white to-primary-50 ring-1 ring-primary-100" />
                            <div className="grid grid-cols-3 gap-2">
                              {['', '', ''].map((_, idx) => (
                                <div key={idx} className="h-12 rounded-lg border border-primary-100 bg-primary-50/60" />
                              ))}
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-dashed border-primary-200 bg-primary-50/60 px-3 py-2">
                              <span className="h-2.5 w-16 rounded-full bg-primary-200" />
                              <span className="h-2.5 w-8 rounded-full bg-primary-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full overflow-hidden">
                        <img
                          src={project.preview}
                          alt="NATIVEENG.ORG product preview"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">{project.category}</p>
                    <h3 className="mt-3 text-2xl font-extrabold text-neutral-900 md:text-[2rem]">{project.name}</h3>
                    <p className="mt-3 text-base leading-relaxed text-neutral-600">{project.description}</p>
                    {project.isComingSoon ? (
                      <p className="mt-5 text-base font-medium text-neutral-700">Product details will be revealed at launch.</p>
                    ) : (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-base font-semibold text-primary-700 transition-all duration-200 hover:bg-primary-100 hover:text-primary-800"
                      >
                        Visit Project →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="about" className="border-y border-neutral-200 bg-primary-50/40 py-16 md:py-20">
          <Container maxWidth="xl" padding="lg">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <h2 className="text-4xl font-extrabold leading-tight text-neutral-900 md:text-6xl">
                Better Technology Does Not Have to Cost More.
              </h2>
              <p className="text-lg leading-relaxed text-neutral-700">
                We believe businesses should not have to compromise between quality and affordability.
                Our approach combines experienced engineering, thoughtful design, and practical technology
                to deliver software that creates lasting value.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container maxWidth="xl" padding="lg">
            <h2 className="text-3xl font-extrabold text-neutral-900 md:text-5xl">From Idea to Production</h2>
            <div className="relative mt-10">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-neutral-200 md:block" />
              <div className="grid gap-6 md:grid-cols-4">
                {process.map((item) => (
                  <div key={item.step} className="relative rounded-xl border border-neutral-200 bg-white p-5">
                    <p className="text-sm font-semibold text-primary-700">{item.step}</p>
                    <h3 className="mt-2 text-xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-2 text-neutral-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-neutral-50 py-16 md:py-20">
          <Container maxWidth="xl" padding="lg">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-extrabold text-neutral-900 md:text-5xl">Technology That Works for You</h2>
              <p className="max-w-2xl text-neutral-600">
                We choose the right tools for your goals, not the most complicated stack.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {technologies.map((tech) => (
                <div key={tech} className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700">
                  {tech}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="pricing" className="bg-white py-16 md:py-20">
          <Container maxWidth="xl" padding="lg">
            <div className="rounded-2xl border border-primary-200 bg-primary-50/70 p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-700">Pricing Philosophy</p>
              <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-5xl">Fair Pricing. Clear Expectations.</h2>
              <p className="mt-4 max-w-3xl text-lg text-neutral-700">
                We believe software development should be transparent. We scope projects carefully,
                communicate clearly, and focus investment on what actually creates value.
              </p>
              <a
                href="/start-project"
                onClick={(event) => {
                  event.preventDefault()
                  navigateTo('/start-project')
                }}
                className="mt-8 inline-block text-base font-semibold text-primary-700 transition-colors hover:text-primary-500"
              >
                Let’s Talk Through It →
              </a>
            </div>
          </Container>
        </section>

        <section id="contact" className="bg-neutral-900 py-16 md:py-20">
          <Container maxWidth="xl" padding="lg">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white md:text-5xl">Have a Business Challenge?</h2>
                <p className="mt-3 max-w-2xl text-neutral-300">
                  Let’s turn it into software that works.
                </p>
              </div>
              <Button size="lg" className="md:min-w-56" onClick={() => navigateTo('/start-project')}>Start a Conversation</Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
