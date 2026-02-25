import heroBg from '../../assets/Hero-BG-LISAI-Guard.png'

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark overlay on left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-xl">
          <h1 className="text-white font-extrabold text-5xl leading-tight mb-4 uppercase">
            Securing Trust<br />For Over Four<br />Decades
          </h1>
          <p className="text-white/90 text-sm mb-8 max-w-sm">
            Pioneers in the Philippine security industry since 1982. We provide proven, reliable protection.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 uppercase tracking-wide transition-colors duration-200 border border-teal-500"
            >
              Get A Quote
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-white/10 text-white text-sm font-semibold px-6 py-3 uppercase tracking-wide transition-colors duration-200 border border-white"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}