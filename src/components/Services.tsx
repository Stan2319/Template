import { useEffect, useRef, useState } from 'react'

interface Service {
  name: string
  description: string
  price: string
}

const services: Service[] = [
  {
    name: 'Brow Lamination',
    description: 'Sleek, fluffy, perfectly shaped brows that last 6–8 weeks. Ideal for unruly or sparse brows.',
    price: '$65',
  },
  {
    name: 'Brow Waxing & Shaping',
    description: 'Expert shaping tailored to your natural arch and facial structure for a clean, defined look.',
    price: '$28',
  },
  {
    name: 'Brow Tinting',
    description: 'Define and darken with a long-lasting, natural-looking tint that frames your face beautifully.',
    price: '$35',
  },
  {
    name: 'Combination Brow',
    description: 'The ultimate brow transformation: lamination and tint combined for maximum impact.',
    price: '$75',
  },
  {
    name: 'Signature Facial',
    description: 'A fully customized facial targeting your skin\'s unique concerns for deep, lasting radiance.',
    price: '$85',
  },
  {
    name: 'Express Facial',
    description: 'A focused 30-minute treatment to refresh, hydrate, and restore your natural glow.',
    price: '$55',
  },
]

interface ServicesProps {
  onBook: () => void
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

export default function Services({ onBook }: ServicesProps) {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal()

  return (
    <section id="services" className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div
          ref={headingRef}
          className={`text-center mb-20 fade-in-section ${headingVisible ? 'is-visible' : ''}`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-blush font-medium block mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-brown mb-6" style={{ letterSpacing: '-0.02em' }}>
            Our Services
          </h2>
          <div className="ornament max-w-xs mx-auto">
            <svg width="6" height="6" viewBox="0 0 6 6" className="text-blush flex-shrink-0">
              <circle cx="3" cy="3" r="3" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-muted font-light text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Every treatment is tailored to you. Pricing is transparent, no surprises, just beautiful results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.name}
              service={service}
              onBook={onBook}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, onBook, delay }: { service: Service; onBook: () => void; delay: number }) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`fade-in-section ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="group bg-beige/60 hover:bg-beige rounded-2xl p-8 flex flex-col h-full transition-all duration-400 hover:-translate-y-1 relative overflow-hidden"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Decorative number — top right */}
        <div
          className="font-serif text-brown/[0.07] text-5xl absolute top-5 right-6 leading-none select-none pointer-events-none"
          aria-hidden
        >
          {String(services.findIndex(s => s.name === service.name) + 1).padStart(2, '0')}
        </div>

        {/* Icon placeholder - decorative leaf */}
        <div className="w-10 h-10 rounded-full bg-blush/15 flex items-center justify-center mb-6 group-hover:bg-blush/25 transition-colors duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-blush">
            <path d="M12 2C12 2 7 8 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 8 12 2 12 2Z" fill="currentColor" opacity="0.7"/>
            <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        <h3 className="font-serif text-xl text-brown mb-3 leading-snug">{service.name}</h3>
        <p className="text-muted text-sm font-light leading-relaxed flex-1 mb-6">{service.description}</p>

        <div className="flex items-center justify-between">
          <span className="font-serif text-2xl text-blush">{service.price}</span>
          <button
            onClick={onBook}
            className="text-xs uppercase tracking-widest text-brown border border-brown/20 hover:border-blush hover:text-blush px-4 py-2 rounded-full transition-all duration-300"
            style={{ letterSpacing: '0.1em' }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
