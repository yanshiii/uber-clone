import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtectWrapper = ({ children }) => {
  const {
    captain,
    isReady,
    logoutCaptain
  } = useContext(CaptainDataContext);

  useEffect(() => {
  }, [captain, isReady]);

  if (!isReady) {
    return <p className='text-center text-gray-600'>Loading...</p>;
  }

  if (!captain) {
    return <Navigate to="/captain-login" />;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
