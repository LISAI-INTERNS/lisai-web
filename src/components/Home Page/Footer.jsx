export default function Footer() {
  return (
    <footer
      className="relative text-white py-16 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f2027 0%, #1a3a3a 50%, #0f2027 100%)',
      }}
    >
      {/* Subtle teal glow */}
      <div className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, #2dd4bf 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left: Tagline + CTA */}
          <div className="max-w-xs">
            <h3 className="text-3xl font-extrabold leading-tight mb-6">
              Let's safeguard your assets, together.
            </h3>
            <a
              href="#"
              className="inline-block border border-white text-white text-sm font-semibold px-6 py-3 hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Contact us
            </a>
          </div>

          {/* Right: Footer columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {/* Office Hours */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-3">Office Hours</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Monday to Friday<br />
                8:00 AM – 5:00 PM
                <br /><br />
                Saturday<br />
                8:00 AM – 8:00 PM
                <br /><br />
                Sunday & Holidays<br />
                Closed
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-3">Company</h4>
              <ul className="space-y-2 text-gray-300 text-xs">
                <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Jobs</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-3">Contact</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Suite 302 Eleongsing Bldg,<br />
                440 Rizal Ave Ext,<br />
                Caloocan City
                <br /><br />
                Mobile: 0917-6381250<br />
                Tel: (+632) 83640165
                <br /><br />
                info@libertyinvestigation.com
              </p>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}