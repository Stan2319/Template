import { useEffect, useState } from 'react'

interface HeroProps {
  onBook: () => void
}

export default function Hero({ onBook }: HeroProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
      style={{ background: 'radial-gradient(ellipse at 25% 60%, #FAF7F2 0%, #F0EAE0 55%, #E8DDD4 100%)' }}
    >
      {/* Decorative large background character */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          className="absolute font-serif text-brown/[0.025] select-none"
          style={{
            fontSize: 'clamp(280px, 45vw, 600px)',
            top: '-5%',
            right: '-5%',
            lineHeight: 1,
            letterSpacing: '-0.05em',
          }}
        >
          Rx
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* Left — Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="h-px w-8 bg-blush" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted font-medium">
                Lakeland, Florida
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-serif text-brown mb-6 transition-all duration-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                transitionDelay: '120ms',
                transitionDuration: '900ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Reveal Your<br />
              <em className="text-blush not-italic">Most Radiant</em><br />
              Self.
            </h1>

            {/* Subheadline */}
            <p
              className={`text-muted font-light text-lg mb-10 max-w-md leading-relaxed transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '280ms', transitionDuration: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Premium brow services &amp; skin treatments designed to enhance your natural beauty, with care you can trust.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '420ms', transitionDuration: '700ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <button
                onClick={onBook}
                className="bg-blush hover:bg-blush-dark text-cream px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ letterSpacing: '0.12em' }}
              >
                Book a Service
              </button>
              <a
                href="#services"
                className="text-brown border border-brown/20 hover:border-blush hover:text-blush px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300"
                style={{ letterSpacing: '0.12em' }}
              >
                View Services
              </a>
            </div>

            {/* Est. badge */}
            <div
              className={`mt-14 flex items-center gap-6 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="text-center">
                <div className="font-serif text-3xl text-blush font-semibold">500+</div>
                <div className="text-xs uppercase tracking-widest text-muted mt-0.5">Happy Clients</div>
              </div>
              <div className="h-8 w-px bg-brown/10" />
              <div className="text-center">
                <div className="font-serif text-3xl text-blush font-semibold">5.0</div>
                <div className="text-xs uppercase tracking-widest text-muted mt-0.5">Star Rating</div>
              </div>
              <div className="h-8 w-px bg-brown/10" />
              <div className="text-center">
                <div className="font-serif text-3xl text-blush font-semibold italic">Est.</div>
                <div className="text-xs uppercase tracking-widest text-muted mt-0.5">2019</div>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div
            className={`relative transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            {/* Decorative frame */}
            <div
              className="absolute -top-6 -right-6 w-full h-full rounded-3xl border border-blush/20"
              style={{ zIndex: -1 }}
            />

            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80&fit=crop"
                alt="Luxury skincare treatment"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Warm overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(44,24,16,0.15) 100%)' }}
              />

              {/* Floating label */}
              <div className="absolute bottom-6 left-6 bg-cream/90 backdrop-blur-sm rounded-xl px-5 py-3">
                <div className="text-xs uppercase tracking-widest text-muted mb-0.5">Signature Service</div>
                <div className="font-serif text-brown text-sm">Brow Transformation</div>
              </div>
            </div>

            {/* Decorative dot pattern */}
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #C9968A40 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted transition-all duration-700 hover:text-blush ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '900ms' }}
      >
        <span className="text-xs uppercase tracking-[0.2em]">Explore</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
          <path d="M8 0V20M1 13L8 20L15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  )
}
