import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface AuthContextProps {
  user: User | null;
  accessToken: string | null;
  loginWithGithub: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Redirect to GitHub for login
  const loginWithGithub = () => {
    window.location.href = `${import.meta.env.VITE_WK_BACKEND_URL}/api/oauth`;
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null);
    setAccessToken(null);
  };

  // Function to exchange code for token and user data
  const fetchUserData = async (code: string) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_WK_BACKEND_URL}/oauth-callback?code=${code}`);
      setAccessToken(response.data.access_token);
      setUser(response.data.user);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  // Check for code in URL after GitHub redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      fetchUserData(code);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, accessToken, loginWithGithub, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
