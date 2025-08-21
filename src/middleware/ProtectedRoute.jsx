import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Preloader from './Preloader';

const ProtectedRoute = ({ children }) => {
  const { user, appLoad } = useAuth();
  
  if (appLoad) {
    return <Preloader />;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
