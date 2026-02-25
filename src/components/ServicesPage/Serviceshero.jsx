export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-h-[520px] flex items-center overflow-hidden"
      style={{ backgroundColor: '#050A14' }}
    >
      {/* Hill-shaped teal glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 140% 80% at 50% 85%, #3DD5C6 0%, #1a7a70 22%, #0a3d3a 42%, #050A14 65%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-16 pt-36 pb-20">
        <p className="text-teal-400 text-sm font-semibold mb-3">Our Services</p>
        <h1 className="text-white font-extrabold text-6xl leading-tight mb-5">
          Security Solutions For<br />Every Threat
        </h1>
        <p className="text-white/60 text-sm max-w-md mb-8 leading-relaxed">
          From guarding your business premises to protecting high-profile individuals — we offer a full range of professional security services tailored to your needs.
        </p>
        <div className="flex gap-4">
          <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 transition-colors duration-200">
            Get a free quote
          </a>
          <a href="#" className="border border-white text-white hover:bg-white/10 text-sm font-semibold px-6 py-3 transition-colors duration-200">
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}