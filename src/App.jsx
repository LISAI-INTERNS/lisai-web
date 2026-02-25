import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceHighlights from './components/ServiceHighlights'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ServiceHighlights />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App