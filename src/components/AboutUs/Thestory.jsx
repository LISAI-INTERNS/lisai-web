import { useLang } from '../../i18n/useLang'
import captPalacio from '../../assets/Capt-Palacio.png'

const stats = [
  { value: '146',  labelKey: 'about.story.stat1' },
  { value: '300+', labelKey: 'about.story.stat2' },
  { value: '600+', labelKey: 'about.story.stat3' },
]

export default function TheStory() {
  const { t } = useLang()

  return (
    <section className="bg-white py-16 sm:py-24 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#1a202c] mb-2">
              {t('about.story.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-[#2d3748] leading-[1.1] mb-8 tracking-tight">
              {t('about.story.title')}
            </h2>
            <img
              src={captPalacio}
              alt="Capt. Francisco C. Palacio"
              className="w-full max-w-sm mx-auto lg:mx-0 object-contain drop-shadow-xl"
            />
          </div>

          {/* Right */}
          <div className="text-sm leading-relaxed space-y-6 lg:pt-16">
            <div className="w-full h-[4px] bg-[#009688] opacity-40 mb-8" />
            <p className="text-[#2d3748] font-bold text-base leading-relaxed">
              {t('about.story.p1')}
            </p>
            <p className="text-[#4a5568] opacity-90">{t('about.story.p2')}</p>
            <p className="text-[#4a5568] opacity-90">{t('about.story.p3')}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="w-full mt-16 mb-12 border-t-[4px] border-[#009688] opacity-50" />
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {stats.map((stat, i) => (
            <div key={stat.labelKey} className="flex items-center">
              <div className="flex flex-col items-center py-6 sm:py-0 sm:px-12 lg:px-16">
                <span className="text-[#009688] font-black text-4xl md:text-5xl leading-none">{stat.value}</span>
                <span className="text-gray-700 text-[13px] font-bold uppercase tracking-wider mt-3 text-center">
                  {t(stat.labelKey)}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block h-20 w-[6px] bg-[#718096] mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
