import React, { createContext, useContext, useState, useEffect } from 'react';

const UserModeContext = createContext();

export const UserModeProvider = ({ children }) => {
  const [isRecruiter, setIsRecruiter] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // On accepte 'r' (court) ou 'mode=recruiter' (ancien)
    const hasRecruiterParam = params.has('r') || params.get('mode') === 'recruiter';
    const storedMode = localStorage.getItem('userMode');
    
    if (hasRecruiterParam) {
      setIsRecruiter(true);
      localStorage.setItem('userMode', 'recruiter');
      document.title = "Antonin Chabaud-Pech";
    } else if (storedMode === 'recruiter') {
      setIsRecruiter(true);
      document.title = "Antonin Chabaud-Pech";
    } else {
      setIsRecruiter(false);
      document.title = "Antonin C.";
    }
  }, []);

  return (
    <UserModeContext.Provider value={{ isRecruiter }}>
      {children}
    </UserModeContext.Provider>
  );
};

export const useUserMode = () => {
  const context = useContext(UserModeContext);
  if (!context) {
    throw new Error('useUserMode must be used within a UserModeProvider');
  }
  return context;
};
