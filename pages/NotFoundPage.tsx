import React from 'react';
import { useI18n } from '../context/I18nContext';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6 bg-brand-off-white">
      <AlertTriangle size={64} className="text-brand-orange mb-6" />
      
      <h1 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-4">
        {t('notFoundPage.title')}
      </h1>
      
      <p className="max-w-md text-brand-text md:text-lg mb-8">
        {t('notFoundPage.message')}
      </p>
      
      <a
        href="#/"
        className="inline-block bg-brand-orange text-white font-bold py-3 px-8 rounded-md hover:bg-brand-orange-dark transition-all duration-300 transform hover:scale-105 text-sm uppercase tracking-wider"
      >
        {t('notFoundPage.homeButton')}
      </a>
    </div>
  );
};

export default NotFoundPage;