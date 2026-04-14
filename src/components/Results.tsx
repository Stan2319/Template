import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: "I've tried brow lamination at three different places in Lakeland. SkinRx is on another level. My brows have never looked this natural or stayed this full for this long. I'm a client for life.",
    name: 'Megan T.',
    service: 'Brow Lamination',
    initial: 'M',
  },
  {
    quote: "The Signature Facial completely transformed my skin. She took so much time understanding what my skin needed, and a week later I still have that glow. My skin has never felt this healthy.",
    name: 'Jasmine R.',
    service: 'Signature Facial',
    initial: 'J',
  },
  {
    quote: "I was nervous to try permanent makeup, but the consultation put me totally at ease. The result looks so natural, everyone thinks I just woke up with perfect brows. Absolutely worth every penny.",
    name: 'Brittany K.',
    service: 'Combination Brow',
    initial: 'B',
  },
]

function useScrollReveal(threshold = 0.1) {
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

export default function Results() {
  const { ref: headRef, visible: headVisible } = useScrollReveal()

  return (
    <section id="results" className="bg-cream py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-20 fade-in-section ${headVisible ? 'is-visible' : ''}`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-blush font-medium block mb-4">
            Client Love
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-brown mb-6" style={{ letterSpacing: '-0.02em' }}>
            What Our Clients Say
          </h2>
          <div className="ornament max-w-xs mx-auto">
            <svg width="6" height="6" viewBox="0 0 6 6" className="text-blush flex-shrink-0">
              <circle cx="3" cy="3" r="3" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 120} />
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div
          className={`text-center mt-16 fade-in-section ${headVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '450ms' }}
        >
          <p className="text-muted font-light text-sm">
            Join hundreds of happy clients in Lakeland.{' '}
            <a
              href="https://www.google.com/search?sca_esv=042d98b02a14ad67&sxsrf=ANbL-n5a0i-4HzkDsoXpBrzC8ix_5-VOXw:1776191359765&q=SkinRx+Lakeland+FL&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOU1CjrBqrn4YbAAEsKT2_tDbSohQAeo9OMYk8lh9M0OtroYd7FLScB9b7B-8fD-0I1TrB-AZF0tIqwyPjAO2FmB5jlc4&sa=X&ved=2ahUKEwiu67S4_O2TAxVI8MkDHYsMBxUQrrQLegQIMRAA&biw=2560&bih=1305&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush hover:text-blush-dark underline underline-offset-2 transition-colors"
            >
              Read more reviews →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, delay }: { testimonial: typeof testimonials[0]; delay: number }) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`fade-in-section ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-beige/70 rounded-2xl p-8 lg:p-10 flex flex-col h-full relative overflow-hidden">
        {/* Background quote mark */}
        <div
          className="absolute -top-4 -right-2 font-serif text-blush/10 select-none pointer-events-none leading-none"
          style={{ fontSize: '10rem' }}
          aria-hidden
        >
          "
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-6 relative z-10">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9968A">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="font-serif text-brown text-[1.05rem] leading-relaxed italic flex-1 relative z-10 mb-8">
          "{testimonial.quote}"
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center gap-3 relative z-10 pt-6 border-t border-brown/8">
          <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-cream font-serif text-sm font-semibold flex-shrink-0">
            {testimonial.initial}
          </div>
          <div>
            <div className="font-medium text-brown text-sm">{testimonial.name}</div>
            <div className="text-xs text-muted-light font-light">{testimonial.service}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
