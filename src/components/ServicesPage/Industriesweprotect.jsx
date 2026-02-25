import logistics from '../../assets/logistics-transpo.png'
import warehouses from '../../assets/warehouses-stockroom.png'
import residential from '../../assets/residential-subdivisions.png'
import offices from '../../assets/offices-corporate-bldg.png'
import shopping from '../../assets/shopping-malls-retail.png'
import highProfile from '../../assets/high-prof-indi.png'

const industries = [
  { icon: logistics, label: 'Logistics & Transportation' },
  { icon: warehouses, label: 'Warehouses & Stockrooms' },
  { icon: residential, label: 'Residential Subdivisions' },
  { icon: offices, label: 'Offices & Corporate Buildings' },
  { icon: shopping, label: 'Shopping Malls & Retail' },
  { icon: highProfile, label: 'High-Profile Individuals' },
]

export default function IndustriesWeProtect() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-400 mb-1">Who We Serve</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Industries We <span className="text-teal-500">Protect</span>
        </h2>
        <p className="text-gray-400 text-sm mb-10 max-w-md">
          Our guards and security personnel are experienced across a wide range of environments and industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <div key={ind.label} className="flex items-center gap-3 border border-gray-200 rounded-lg px-5 py-4 hover:shadow-sm transition-shadow duration-200">
              <img src={ind.icon} alt={ind.label} className="w-6 h-6 object-contain shrink-0" />
              <span className="text-gray-700 text-sm font-medium">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-14 border-t border-gray-100" />
    </section>
  )
}