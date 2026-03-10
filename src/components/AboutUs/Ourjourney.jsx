import { useLang } from '../../i18n/useLang'

export default function OurJourney() {
  const { t } = useLang()

  const milestones = [
    { year: '1982', titleKey: 'about.journey.y1982title', descKey: 'about.journey.y1982desc' },
    { year: '1986', titleKey: 'about.journey.y1986title', descKey: 'about.journey.y1986desc' },
    { year: '2000s', titleKey: 'about.journey.y2000title', descKey: 'about.journey.y2000desc' },
    { year: '2025', titleKey: 'about.journey.y2025title', descKey: 'about.journey.y2025desc' },
  ]

  return (
    <section
      className="py-16 px-6"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #b2ede6 40%, #7dd8cf 70%, #b2ede6 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-teal-600 text-2xl sm:text-3xl font-semibold mb-4">
            {t('about.journey.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900 mb-4">
            {t('about.journey.title')}
          </h2>
          <p className="text-gray-600 text-base">{t('about.journey.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {milestones.map((m) => (
            <div key={m.year} className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-teal-500 border-2 border-white shadow mb-4" />
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 w-full">
                <p className="text-teal-500 font-extrabold text-xl sm:text-2xl mb-1">{m.year}</p>
                <p className="font-semibold text-gray-800 text-sm mb-2">{t(m.titleKey)}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{t(m.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-300 opacity-50" />
      </div>
    </section>
  )
}
