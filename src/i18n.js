// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzTranslation from './locales/uzbek.json'
import ruTranslation from './locales/russian.json'

const lang = localStorage.getItem('lang') || "ru";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uzTranslation },
            ru: { translation: ruTranslation },
        },
        lng: lang,
        fallbackLng: lang,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;