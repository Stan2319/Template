import { useEffect, useRef, useState } from 'react'

function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

const trustSignals = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blush">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
    label: 'Licensed Aesthetician',
    sub: 'State certified & insured',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blush">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: '500+ Happy Clients',
    sub: 'Lakeland & surrounding areas',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blush">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: '5-Star Rated',
    sub: 'Google & Facebook reviews',
  },
]

export default function About() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal()
  const { ref: rightRef, visible: rightVisible } = useScrollReveal()

  return (
    <section id="about" className="bg-beige py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Story */}
          <div
            ref={leftRef}
            className={`fade-in-section ${leftVisible ? 'is-visible' : ''}`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-blush font-medium block mb-4">
              Our Story
            </span>
            <h2
              className="font-serif text-4xl lg:text-5xl text-brown mb-8"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              Beauty Rooted in<br />
              <em className="text-blush">Care &amp; Craft.</em>
            </h2>

            <div className="space-y-5 text-muted font-light leading-relaxed">
              <p>
                SkinRx was born from a simple belief: everyone deserves to feel confidently beautiful in their own skin. Founded right here in Lakeland, FL, we've spent years perfecting the art of brow design and skin care, one client at a time.
              </p>
              <p>
                Our approach is personal. Before every service, we take time to understand your goals, your skin, and your lifestyle. Whether you're coming in for a quick brow wax or a transformative lamination, you leave feeling like the best version of yourself.
              </p>
              <p>
                We use only premium, skin-safe products, because what touches your face matters. You're not just a client here. You're a member of our community.
              </p>
            </div>

            {/* Trust signals */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="bg-cream/60 rounded-xl px-5 py-4 flex flex-col gap-1"
                >
                  <div className="mb-1">{signal.icon}</div>
                  <div className="font-medium text-brown text-sm">{signal.label}</div>
                  <div className="text-xs text-muted-light font-light">{signal.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div
            ref={rightRef}
            className={`relative fade-in-section ${rightVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            {/* Offset background block */}
            <div
              className="absolute -bottom-8 -right-8 w-3/4 h-3/4 rounded-3xl bg-blush/10"
              style={{ zIndex: 0 }}
            />

            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=700&q=80&fit=crop"
                alt="SkinRx aesthetician at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg, transparent 50%, rgba(240,234,224,0.3) 100%)' }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -left-6 bottom-20 bg-cream rounded-2xl px-6 py-5 z-20"
              style={{ boxShadow: '0 20px 60px rgba(44,24,16,0.1)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blush/15 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blush">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" opacity="0.7"/>
                  </svg>
                </div>
                <div>
                  <div className="font-serif text-brown text-sm font-medium">Loved in Lakeland</div>
                  <div className="text-xs text-muted font-light">★★★★★ on Google</div>
                </div>
              </div>
            </div>

            {/* Decorative botanical accent */}
            <div className="absolute -top-6 -left-6 opacity-20 pointer-events-none" aria-hidden>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M40 70 C40 70 20 55 20 35 C20 24 29 15 40 15 C51 15 60 24 60 35 C60 55 40 70 40 70Z" stroke="#C9968A" strokeWidth="1.5" fill="none"/>
                <path d="M40 70 C40 70 25 60 25 42" stroke="#C9968A" strokeWidth="1" fill="none" opacity="0.5"/>
                <path d="M40 70 C40 70 55 60 55 42" stroke="#C9968A" strokeWidth="1" fill="none" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
