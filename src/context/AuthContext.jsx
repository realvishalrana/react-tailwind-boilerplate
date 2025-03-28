// context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setCurrentUser({ email });
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  const logout = () => {
    setCurrentUser(null);
    navigate("/login");
  };

  const value = {
    currentUser,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
