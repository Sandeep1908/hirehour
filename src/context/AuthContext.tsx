import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  isCandidateAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children:ReactNode}> = ({ children }) => {
  const [isCandidateAuthenticated, setisCandidateAuthenticated] = useState(false);

  const login = () => setisCandidateAuthenticated(true);
  const logout = () => setisCandidateAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isCandidateAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
