import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (role, credentials) => {
    // Simulate authentication
    setUser({ role, ...credentials });
    
    // Redirect based on role
    switch(role) {
      case 'admin': navigate('/admin'); break;
      case 'parent': navigate('/parent'); break;
      case 'medical': navigate('/medical'); break;
      case 'authority': navigate('/authority'); break;
      case 'school': navigate('/school'); break;
      default: navigate('/');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);