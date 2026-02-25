export default function WhatMakesDifferent() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left */}
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-1">Why Choose LISAI</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
            What Makes Our<br />Service Different
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We don't just post a guard and walk away. Every engagement is backed by structured training, proper supervision, and a commitment to your long-term safety.
          </p>
        </div>

        {/* Right */}
        <div className="flex-shrink-0 flex flex-col gap-8 text-center">
          <div>
            <p className="text-5xl font-extrabold text-gray-900">40+</p>
            <p className="text-gray-500 text-sm mt-1">Years of Proven Experience</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-gray-900">SOSIA</p>
            <p className="text-gray-500 text-sm mt-1">Licensed & Accredited</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-14 border-t border-gray-100" />
    </section>
  )
}