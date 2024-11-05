import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importez vos fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Configuration d'i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React échappe automatiquement le contenu
    },
  });

export default i18n;
