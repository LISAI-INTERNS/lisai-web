import logo from '../assets/lisai-logo.png'

const navLinks = ['Home', 'About Us', 'Services', 'Jobs / Training', 'Contact Us', 'Security Gazette']

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="LISAI Logo" className="h-14 w-auto" />
          <div className="leading-tight">
            <p className="text-white font-bold text-sm">Liberty Investigation</p>
            <p className="text-white font-bold text-sm">& Security Agency Inc.</p>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-teal-300 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}