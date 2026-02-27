import heroBg from '../../assets/Hero-BG-LISAI-Guard.png'

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: '70% center',
      }}
    >
      {/* Overlay - stronger on mobile */}
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to right, rgba(13,62,55,0.95) 0%, rgba(13,62,55,0.75) 50%, rgba(13,62,55,0.3) 100%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex justify-start">
        <div className="w-full max-w-xl lg:ml-16">
          <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl leading-[1] mb-5 uppercase tracking-tight">
            Securing Trust<br />
            For Over Four<br />
            Decades
          </h1>

          <p className="text-white/90 text-base sm:text-lg font-medium mb-8 max-w-md leading-snug">
            Pioneers in the Philippine security industry since 1982.
            We provide proven, reliable protection.
          </p>

          <div className="flex flex-row gap-3">
            <button className="bg-[#1591a3] hover:bg-[#0d7a8a] text-white text-sm font-bold px-5 sm:px-8 py-3 uppercase tracking-widest transition-all">
              Get A Quote
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-[#1591a3] text-sm font-bold px-5 sm:px-8 py-3 uppercase tracking-widest transition-all">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}