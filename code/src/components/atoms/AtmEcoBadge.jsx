import React, { useEffect } from 'react';
import { useTheme } from '../../styles/ThemeProvider';

const AtmEcoBadge = ({ width = '160px', alt = 'Ecoindex badge' }) => {
  const { isDark } = useTheme();

  useEffect(() => {
    const scriptId = 'ecoindex-badge-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="ecoindex-badge"
      data-theme={isDark ? 'dark' : 'light'}
      aria-label={alt}
      style={{ width }}
    />
  );
};

export default AtmEcoBadge;
