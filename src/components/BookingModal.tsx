import { useEffect } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brown/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-cream rounded-2xl shadow-2xl max-w-md w-full p-10 text-center"
        style={{ boxShadow: '0 32px 80px rgba(44,24,16,0.18)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-brown hover:bg-beige transition-colors duration-200"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Ornament */}
        <div className="flex justify-center mb-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#C9968A" strokeWidth="1"/>
            <path d="M16 8 C16 8 12 13 12 16 C12 18.2 13.8 20 16 20 C18.2 20 20 18.2 20 16 C20 13 16 8 16 8Z" fill="#C9968A" opacity="0.6"/>
            <circle cx="16" cy="25" r="1.5" fill="#C9968A"/>
          </svg>
        </div>

        <h2 className="font-serif text-2xl text-brown mb-2">Ready to Book?</h2>
        <p className="text-muted text-sm mb-8 font-light">
          We'd love to see you. Reach out to schedule your appointment.
        </p>

        {/* Phone */}
        <a
          href="tel:8632484551"
          className="block bg-blush hover:bg-blush-dark text-cream rounded-xl py-4 px-6 mb-4 transition-all duration-300 group"
        >
          <span className="block text-xs uppercase tracking-widest mb-1 opacity-80">Call or Text Us</span>
          <span className="font-serif text-xl">863-248-4551</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/skinrxlakeland"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-blush/40 text-brown rounded-xl py-3 px-6 hover:bg-beige transition-all duration-300"
        >
          <span className="text-xs uppercase tracking-widest text-muted block mb-0.5">Or DM Us On</span>
          <span className="font-serif text-base">@skinrxlakeland</span>
        </a>

        <p className="text-xs text-muted-light mt-6 font-light">
          Located in Lakeland, FL · Mon–Sat by Appointment
        </p>
      </div>
    </div>
  )
}
