import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
  // detect user language
  
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(HttpApi)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    supportedLngs:['en','fr'],
    debug: true,
    // lng: document.querySelector('html').lang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection:{
        order: ['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    backend:{
        loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense:false},

  });

export default i18n;