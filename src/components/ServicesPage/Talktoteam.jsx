export default function TalkToTeam() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-600 text-sm mb-5">Ready to Get Started?</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-4">
          Talk to Our Security Team Today
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Reach out directly and we'll match you with the right service — no obligation, no runaround. Just a straightforward conversation about protecting what matters to you.
        </p>
        <a
          href="#"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-8 py-3 rounded transition-colors duration-300 mb-12"
        >
          Send us a Message
        </a>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="border border-gray-300 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center">
            <p className="text-[13px] text-[#009688] font-bold uppercase tracking-widest mb-3">Call Us</p>
            <p className="text-gray-800 text-sm font-semibold text-center">
              0917 638 1250<br />(+632) 8364 0165
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center">
            <p className="text-[13px] text-[#009688] font-bold uppercase tracking-widest mb-3">Email Us</p>
            <p className="text-gray-800 text-sm font-semibold text-center">
              admin@libertysecurityph.com <br /> libertyinvestigation_inc@yahoo.com
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center">
            <p className="text-[13px] text-[#009688] font-bold uppercase tracking-widest mb-3">Office Hours</p>
            <p className="text-gray-800 text-sm font-semibold text-center">
              Mon–Sat: 8:00 AM – 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
