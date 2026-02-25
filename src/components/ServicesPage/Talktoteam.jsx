export default function TalkToTeam() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-400 mb-2">Ready to Get Started?</p>
        <h2 className="text-4xl font-bold text-teal-600 mb-4">
          Talk to Our Security Team Today
        </h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Reach out directly and we'll match you with the right service — no obligation, no runaround. Just a straightforward conversation about protecting what matters to you.
        </p>
        <a
          href="#"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-8 py-3 rounded transition-colors duration-200 mb-12"
        >
          Send us a Message
        </a>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border border-gray-200 rounded-xl p-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Call Us</p>
            <p className="text-gray-700 text-sm font-medium">0917-6381250</p>
            <p className="text-gray-700 text-sm font-medium">(+632) 83640165</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Email Us</p>
            <p className="text-teal-500 text-sm font-medium">libertyinvestigation_inc@yahoo.com</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Office Hours</p>
            <p className="text-gray-700 text-sm font-medium">Mon–Sat 8:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}