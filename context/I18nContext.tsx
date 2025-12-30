
// DEPRECATED: This file is kept for legacy compatibility but should be removed.
// Use `import { useTranslation } from 'react-i18next';` directly in components.
import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t, i18n } = useTranslation();
  return {
    t, 
    language: i18n.language,
    setLanguage: (lang: string) => i18n.changeLanguage(lang),
  };
};
