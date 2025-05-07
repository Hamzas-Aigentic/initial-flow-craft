import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { User } from "@shared/schema";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [storedUser, setStoredUser] = useLocalStorage<User | null>("aigenticbros-user", null);
  const [user, setUser] = useState<User | null>(storedUser);
  const isAuthenticated = !!user;

  // Update localStorage when user changes
  useEffect(() => {
    setStoredUser(user);
  }, [user, setStoredUser]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
