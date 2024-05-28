import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('login_token'),
    username: localStorage.getItem('username'),
    isAuthenticated: !!localStorage.getItem('login_token'),
    isLoading: true, 
  });

  const login = (token, username) => {
    localStorage.setItem('login_token', token);
    localStorage.setItem('username', username);
    setAuth({
      token,
      username,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const logout = () => {
    localStorage.removeItem('login_token');
    localStorage.removeItem('username');
    setAuth({
      token: null,
      username: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('login_token');
    const username = localStorage.getItem('username');
    if (token) {
      setAuth({
        token,
        username,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuth((prevAuth) => ({
        ...prevAuth,
        isLoading: false,
      }));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
