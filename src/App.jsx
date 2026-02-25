import Navbar from './components/Home Page/Navbar'
import Hero from './components/Home Page/Hero'
import ServiceHighlights from './components/Home Page/ServiceHighlights'
import AboutUs from './components/Home Page/AboutUs'
import ContactUs from './components/Home Page/ContactUs'
import Footer from './components/Home Page/Footer'

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