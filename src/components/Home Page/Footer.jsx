import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(to right, #0d1b2a 0%, #0d2d35 40%, #0a4a45 70%, #0d6b5e 100%)',
        padding: '64px 48px',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 300,
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap');`}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: '48px', flexWrap: 'wrap' }}>

        {/* Left: Tagline + CTA */}
        <div style={{ flex: '1 1 380px', maxWidth: '520px' }}>
          <h3 style={{ color: 'white', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '48px', fontFamily: "'Poppins', sans-serif" }}>
            Let's safeguard your<br />assets, together.
          </h3>
          <Link
            to="/contact"
            style={{ display: 'inline-block', backgroundColor: '#2a7a9b', color: 'white', fontSize: '15px', fontWeight: 300, padding: '14px 36px', textDecoration: 'none', fontFamily: "'Poppins', sans-serif" }}
          >
            Contact us
          </Link>
        </div>

        {/* Right: 4 columns */}
        <div style={{ flex: '1 1 560px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>

          {/* Office Hours */}
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Office Hours</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.9, fontWeight: 300 }}>
              Monday to Friday<br />
              8:00 AM - 5:00PM
              <br /><br />
              Saturday<br />
              9:00 AM - 5:00PM
              <br /><br />
              Sunday & Holidays<br />
              Closed
            </p>
          </div>

          {/* Company */}
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Company</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Jobs', path: '/jobs' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <Link key={link.label} to={link.path} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 300, textDecoration: 'none' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Contact</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.9, fontWeight: 300 }}>
              Suite 302 Eleongsing Bldg<br />
              440 Rizal Ave Ext,<br />
              Caloocan City
              <br /><br />
              Mobile: 0917-6381250<br />
              Land: (+632) 83640165
              <br /><br />
              <a href="mailto:admin@libertysecurityph.com" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'underline', fontWeight: 300 }}>
                admin@libertysecurityph.com
              </a>
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.75)' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.75)' }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.75)' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}