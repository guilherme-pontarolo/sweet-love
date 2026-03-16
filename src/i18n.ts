import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptTranslation from './locales/pt/translation.json'
import enTranslation from './locales/en/translation.json'

const LANGUAGE_STORAGE_KEY = 'sweet-love-language'

export const availableLanguages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
]

const getInitialLanguage = () => {
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (saved) return saved

  const browser = navigator.language.split('-')[0]
  if (availableLanguages.some((lang) => lang.code === browser)) return browser

  return 'pt'
}

const language = getInitialLanguage()

i18n
  .use(initReactI18next)
  .init({
    lng: language,
    fallbackLng: 'pt',
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    keySeparator: false,
  })

export function setLanguage(lang: string) {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  void i18n.changeLanguage(lang)
}

export default i18n
