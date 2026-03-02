export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#0B2E2A' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0B2E2A 0%, #0f766e 55%, rgba(61,213,198,0.15) 100%)',
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />

      {/* Decorative concentric rings — right side */}
      <div
        className="absolute right-0 top-1/2 z-0 pointer-events-none select-none"
        style={{ transform: 'translate(40%, -50%)' }}
      >
        {[320, 240, 160, 80].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid rgba(61,213,198,' + (0.04 + i * 0.03) + ')',
            }}
          />
        ))}
      </div>

      {/* Giant decorative quotation mark */}
      <div
        className="absolute right-0 top-0 z-0 select-none pointer-events-none"
        style={{
          fontSize: 'clamp(200px, 30vw, 420px)',
          fontWeight: 900,
          color: 'rgba(61,213,198,0.05)',
          lineHeight: 1,
          transform: 'translate(8%, -15%)',
          fontFamily: 'Georgia, serif',
        }}
      >
        "
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-32 pb-20">
        {/* Eyebrow */}
        <p className="text-[#3DD5C6] text-xs font-bold uppercase tracking-[0.25em] mb-5">
          Get in Touch
        </p>

        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] uppercase tracking-tight mb-6">
          Let's Secure<br />
          Your Future,<br />
          <span style={{ color: '#3DD5C6' }}>Together.</span>
        </h1>

        <p className="text-white/75 text-sm max-w-md leading-relaxed mb-8">
          From guarding your business premises to protecting high-profile individuals — a full range of professional security services tailored to your needs.
        </p>

        <div className="flex flex-row flex-wrap gap-3">
          <button className="bg-[#0f766e] hover:bg-[#0d6460] text-white text-xs font-bold px-8 py-3 uppercase tracking-widest transition-colors duration-200">
            Get A Free Quote
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white/70 text-xs font-bold px-8 py-3 uppercase tracking-widest transition-all duration-200">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="relative z-10 w-full"
        style={{ height: '2px', background: 'linear-gradient(to right, #0f766e, #3DD5C6, transparent)' }}
      />
    </section>
  )
}
