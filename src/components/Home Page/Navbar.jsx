import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useLang } from '../../i18n/useLang'
import logo from '../../assets/lisai-logo.png'

const navLinks = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.about', path: '/about' },
  { labelKey: 'nav.services', path: '/services' },
  { labelKey: 'nav.jobs', path: '/jobs' },
  { labelKey: 'nav.contact', path: '/contact' },
]

function LangToggle({ lang, setLang }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang('en')}
        title="English"
        style={{
          fontSize: '18px',
          opacity: lang === 'en' ? 1 : 0.4,
          transition: 'opacity 0.2s',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          lineHeight: 1,
          padding: '2px',
        }}
      >
        🇵🇭
      </button>
      <button
        onClick={() => setLang('zh')}
        title="中文"
        style={{
          fontSize: '18px',
          opacity: lang === 'zh' ? 1 : 0.4,
          transition: 'opacity 0.2s',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          lineHeight: 1,
          padding: '2px',
        }}
      >
        🇨🇳
      </button>
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)
  const { t, lang, setLang } = useLang()

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

  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      {/* DESKTOP */}
      <nav className="hidden lg:block absolute top-0 w-full z-50 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="LISAI Logo" className="h-10 w-auto" />
            <div className="leading-tight">
              <p className="text-white font-bold text-sm">Liberty Investigation</p>
              <p className="text-white font-bold text-sm">& Security Agency Inc.</p>
            </div>
          </Link>

          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${
                    isActive(link.path) ? 'text-[#3DD5C6]' : 'text-white hover:text-teal-300'
                  }`}
                >
                  {t(link.labelKey)}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{ backgroundColor: '#3DD5C6' }} />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <LangToggle lang={lang} setLang={setLang} />
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE */}
      <nav
        className="lg:hidden fixed top-0 w-full z-50 transition-transform duration-300"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: atTop && !menuOpen ? 'transparent' : 'rgba(10, 32, 29, 0.97)',
          backdropFilter: atTop && !menuOpen ? 'none' : 'blur(8px)',
        }}
      >
        <div className="px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="LISAI Logo" className="h-9 w-auto" />
            <div className="leading-tight">
              <p className="text-white font-bold text-sm">Liberty Investigation</p>
              <p className="text-white font-bold text-sm">& Security Agency Inc.</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ backgroundColor: 'rgba(10, 32, 29, 0.97)' }} className="px-6 pb-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-medium transition-colors duration-200 block py-2 border-b border-white/10 ${
                      isActive(link.path) ? 'text-[#3DD5C6]' : 'text-white hover:text-teal-300'
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
