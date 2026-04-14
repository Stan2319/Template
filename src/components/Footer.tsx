export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-brown text-cream/80 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-cream/10">

          {/* Brand */}
          <div>
            <div className="font-serif text-3xl text-cream mb-3 tracking-tight">SkinRx</div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-6">Med Spa</div>
            <p className="text-sm font-light leading-relaxed text-cream/60 max-w-xs">
              Premium brow services &amp; skin treatments in the heart of Lakeland, FL. Where beauty meets intention.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.instagram.com/skinrxlakeland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-blush hover:text-blush transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-blush hover:text-blush transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-6 font-medium">Services</h4>
            <ul className="space-y-3">
              {[
                'Brow Lamination',
                'Brow Waxing & Shaping',
                'Brow Tinting',
                'Combination Brow',
                'Signature Facial',
                'Express Facial',
              ].map((service) => (
                <li key={service}>
                  <button
                    className="text-sm font-light text-cream/60 hover:text-blush transition-colors duration-200"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-6 font-medium">Contact</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-blush">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div className="text-sm font-light text-cream/60 leading-relaxed">
                    Lakeland, FL<br />
                    <span className="text-cream/40 text-xs">Serving Central Florida</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-blush">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.47 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:8632484551" className="text-sm font-light text-cream/80 hover:text-blush transition-colors duration-200">
                  863-248-4551
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-blush">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <a
                  href="https://www.instagram.com/skinrxlakeland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-cream/80 hover:text-blush transition-colors duration-200"
                >
                  @skinrxlakeland
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-blush">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div className="text-sm font-light text-cream/60">
                  Mon–Sat: By Appointment<br />
                  <span className="text-cream/40 text-xs">Closed Sunday</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-cream/30">
            © {year} SkinRx Med Spa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-light text-cream/30">Lakeland, FL</span>
            <div className="h-3 w-px bg-cream/15" />
            <span className="text-xs font-light text-cream/30">Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
