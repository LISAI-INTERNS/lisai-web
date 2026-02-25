import captPalacio from '../../assets/Capt-Palacio.png'

const stats = [
  { value: '5,000', label: 'Successful Projects' },
  { value: '5,000', label: 'Guards on Duty' },
  { value: '5,000', label: 'Happy Customers' },
]

export default function TheStory() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-2 gap-16">
          {/* Left: Title + Image */}
          <div>
            <p className="text-sm text-gray-400 mb-2">The "Story"</p>
            <h2 className="text-3xl font-semibold text-gray-900 leading-snug mb-6">
              From Humble Beginnings to Industry Leadership
            </h2>
            <img
              src={captPalacio}
              alt="Capt. Francisco C. Palacio"
              className="w-full object-contain"
            />
          </div>

          {/* Right: Paragraphs */}
          <div className="text-sm leading-relaxed space-y-5 pt-2">
            <p className="text-gray-900 font-semibold text-base">
              In 1982, our founder, Francisco C. Palacio, and his wife, Dr. Celesdenia Palacio, MD, embarked on a journey in the security industry by establishing the Magilas Security Agency. Driven by a vision to provide unparalleled protection services, they laid the foundation for what would become one of the Philippines' most trusted security firms.
            </p>
            <p className="text-gray-500">
              "From Magilas to Liberty – a transformation that marked our commitment to excellence and innovation in security services." Four years later, in 1986, the company underwent a strategic transformation and became Liberty Investigation & Security Agency Inc. This rebranding signified more than a name change — it represented our evolving commitment to comprehensive security solutions and investigative services.
            </p>
            <p className="text-gray-500">
              Throughout the years, Liberty has experienced remarkable growth, establishing itself as a respected and trusted security firm in the region. This success is a testament to the unwavering dedication of our highly skilled team who tirelessly ensure the safety and well-being of our valued clients.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 pt-10 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-6 sm:py-0 sm:px-24">
                <span className="text-teal-500 font-extrabold text-5xl">{stat.value}</span>
                <span className="text-gray-500 text-base mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-16 border-t border-teal-100" />
    </section>
  )
}