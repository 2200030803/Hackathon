// src/modules/AccessibilityModule.js
import React, { useState } from 'react';

const AccessibilityModule = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast', !highContrast);
  };

  const toggleScreenReader = () => {
    setScreenReader(!screenReader);
    document.body.classList.toggle('screen-reader-mode', !screenReader);
  };

  return (
    <div className="accessibility-module" aria-live="polite">
      <div>
        <button onClick={toggleHighContrast} aria-label="Toggle high contrast mode">
          {highContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
        </button>
      </div>
      <div>
        <button onClick={toggleScreenReader} aria-label="Toggle screen reader mode">
          {screenReader ? 'Disable Screen Reader Mode' : 'Enable Screen Reader Mode'}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityModule;
