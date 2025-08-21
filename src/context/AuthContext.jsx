import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import api from '../api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [appLoad, setAppLoad] = useState(true)
  const [statsData, setStatsData] = useState({})


  const fetchuser = async () => {
    try {
      const token = Cookies.get('token'); 
      if (!token) {
        setUser(null);
        setAppLoad(false);
        return;
      }
      const response = await api.get('/admin/profile')
      if (response.success) {
        setUser(response.data);
      } else {
          setUser(null);
      }
      } catch (error) {
        console.error('Failed to fetch admin data:', error);
        setUser(null);
      } finally {
        setAppLoad(false);
      }
    };

    useEffect(() => {
        // fetchuser();
    }, []);

  return (
    <AuthContext.Provider value={{user, setUser, appLoad, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);