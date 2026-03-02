import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/lisai-logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Jobs / Training', path: '/jobs' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 10)
      setVisible(currentY < lastScrollY.current || currentY < 10)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when navigating
  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-transform duration-300 lg:absolute lg:transform-none"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        backgroundColor: atTop && !menuOpen ? 'transparent' : 'rgba(10, 32, 29, 0.97)',
        backdropFilter: atTop && !menuOpen ? 'none' : 'blur(8px)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="LISAI Logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <p className="text-white font-bold text-sm">Liberty Investigation</p>
            <p className="text-white font-bold text-sm">& Security Agency Inc.</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${
                  isActive(link.path) ? 'text-[#3DD5C6]' : 'text-white hover:text-teal-300'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                    style={{ backgroundColor: '#3DD5C6' }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: 'rgba(10, 32, 29, 0.97)' }} className="lg:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 block py-2 border-b border-white/10 ${
                    isActive(link.path) ? 'text-[#3DD5C6]' : 'text-white hover:text-teal-300'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}