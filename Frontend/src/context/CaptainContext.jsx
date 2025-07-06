import { createContext, useState, useEffect } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedCaptain = localStorage.getItem('captain');

    if (storedCaptain) {
      const parsed = JSON.parse(storedCaptain);
      setCaptain(parsed);
    }

    setIsReady(true);
  }, []);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
    localStorage.setItem('captain', JSON.stringify(captainData));
  };

  const logoutCaptain = () => {
    setCaptain(undefined);
    localStorage.removeItem('captain');
  };

  return (
    <CaptainDataContext.Provider
      value={{
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
        logoutCaptain,
        isReady
      }}
    >
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
