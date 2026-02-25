import guardIcon from '../assets/guard_1.png'
import researchIcon from '../assets/research_1.png'
import consultationIcon from '../assets/consultation_1.png'
import vipIcon from '../assets/personal-data_1.png'

const services = [
  {
    icon: guardIcon,
    title: 'Manned Guarding',
    description:
      'Professional, uniformed guards for malls, offices and subdivisions, providing visible deterrence and rapid response.',
  },
  {
    icon: researchIcon,
    title: 'Investigation',
    description:
      'Comprehensive background checks, surveillance and private investigation services for individuals and businesses.',
  },
  {
    icon: consultationIcon,
    title: 'Security Consultancy',
    description:
      'Expert risk assessment, safety audits and tailored security planning to mitigate vulnerabilities.',
  },
  {
    icon: vipIcon,
    title: 'VIP Protection',
    description:
      'Discreet, highly-trained escort services and close-in security for executives and high-profile individuals.',
  },
]

export default function ServiceHighlights() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Service <span className="text-teal-500">Highlights</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center">
              {/* Icon circle */}
              <div className="w-24 h-24 rounded-full bg-teal-50 flex items-center justify-center mb-4 border border-teal-100">
                <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-wide text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-teal-200" />
    </section>
  )
}