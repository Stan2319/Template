import { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Results from './components/Results'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Hero onBook={() => setModalOpen(true)} />
      <Services onBook={() => setModalOpen(true)} />
      <About />
      <Results />
      <Footer />
    </div>
  )
}
