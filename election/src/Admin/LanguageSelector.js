// src/modules/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);  // Change language dynamically
  };

  return (
    <div className="language-selector" aria-live="polite">
      <label htmlFor="language-dropdown" style={{ fontSize: '16px', marginRight: '10px' }}>
        Select Language:
      </label>
      <select id="language-dropdown" onChange={handleChangeLanguage} aria-label="Choose your preferred language">
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
