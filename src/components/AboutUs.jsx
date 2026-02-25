import guardPhoto from '../assets/Guard-Element-Home.png'

const stats = [
  { value: '5,000', label: 'Successful Projects' },
  { value: '5,000', label: 'Guards on Duty' },
  { value: '5,000', label: 'Happy Customers' },
]

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">About Us</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Built on <span className="text-teal-500">Integrity,</span>
            <br />
            Bound by <span className="text-teal-500">Trust.</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm">
            Over four decades of unmatched dedication to safeguarding your lives and assets.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col ${i > 0 ? 'border-l border-gray-200 pl-8' : ''}`}>
                <span className="text-teal-500 font-extrabold text-xl">{stat.value}</span>
                <span className="text-gray-500 text-xs mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-3 transition-colors duration-200"
          >
            Read More
          </a>
        </div>

        {/* Right: Guard photo with teal background */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-96 bg-teal-400 rounded-lg overflow-hidden flex items-end justify-center">
            <img
              src={guardPhoto}
              alt="Liberty Security Guard"
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-teal-200" />
    </section>
  )
}