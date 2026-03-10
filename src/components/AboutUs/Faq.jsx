import { useState } from 'react'
import { useLang } from '../../i18n/useLang'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLang()

  const faqs = [
    { qKey: 'about.faq.q1', aKey: 'about.faq.a1' },
    { qKey: 'about.faq.q2', aKey: 'about.faq.a2' },
    { qKey: 'about.faq.q3', aKey: 'about.faq.a3' },
    { qKey: 'about.faq.q4', aKey: 'about.faq.a4' },
  ]

  return (
    <section className="py-16 sm:py-20 px-6" style={{ background: 'linear-gradient(180deg, #b2ede6 0%, #7dd8cf 50%, #3DD5C6 100%)' }}>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">

        <div className="lg:w-72 flex-shrink-0 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {t('about.faq.label')}
          </h2>
          <p className="text-gray-600 text-base">{t('about.faq.subtitle')}</p>
        </div>

        <div className="flex-1 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.qKey}
                className="rounded-xl overflow-hidden border border-white/40 transition-all duration-300 bg-white/80"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left text-gray-800"
                >
                  <span className="text-sm sm:text-base font-semibold pr-4">{t(faq.qKey)}</span>
                  <span className={`text-lg flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gray-900' : 'text-gray-400'}`}>
                    ▼
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 sm:px-6 pb-5 text-sm leading-relaxed text-gray-700">
                    {t(faq.aKey)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
