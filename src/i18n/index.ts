import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import enIN from '@/i18n/locales/en-IN.json';


i18n.use(initReactI18next).init({ resources: { 'en-IN': { translation: enIN } }, lng: 'en-IN', fallbackLng: 'en-IN', interpolation: { escapeValue: false} });


export default i18n;