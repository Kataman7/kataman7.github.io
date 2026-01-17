import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLoading, LOADING_DURATIONS } from '../contexts/LoadingContext';
import PagHome from '../pages/PagHome';
import PagProjectDetail from '../pages/PagProjectDetail';
import PagSkills from '../pages/PagSkills';
import PagContact from '../pages/PagContact';

const AppRoutes = () => {
  const location = useLocation();
  const { withLoader } = useLoading();
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      withLoader(async () => {
        setDisplayLocation(location);
        
        // Attendre un peu que React render la nouvelle page
        await new Promise(resolve => setTimeout(resolve, 10));
        
        // Si on va vers une page projet, scroller en haut
        if (location.pathname.startsWith('/project/')) {
          window.scrollTo(0, 0);
        }
      });
    }
  }, [location, displayLocation, withLoader]);

  return (
    <Routes location={displayLocation}>
      <Route path="/" element={<PagHome />} />
      <Route path="/skills" element={<PagSkills />} />
      <Route path="/contact" element={<PagContact />} />
      <Route path="/project/:projectId" element={<PagProjectDetail />} />
      <Route path="*" element={<PagHome />} />
    </Routes>
  );
};

export default AppRoutes;
