import { useTranslation } from 'react-i18next'

/**
 * useLang — thin wrapper around react-i18next
 * Usage:
 *   const { t, lang, setLang } = useLang()
 *   t('nav.home')          → translated string
 *   setLang('zh')          → switches to Mandarin + saves to localStorage
 */
export function useLang() {
  const { t, i18n } = useTranslation()

  const setLang = (code) => {
    i18n.changeLanguage(code)
    localStorage.setItem('lang', code)
  }

  return { t, lang: i18n.language, setLang }
}
