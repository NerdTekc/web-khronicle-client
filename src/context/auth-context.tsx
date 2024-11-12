import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import localStorageUtil, { StorageKeys } from "../../lib/local-storage";

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
  const navigate = useNavigate();

  const loginWithGithub = () => {
    window.location.href = `${import.meta.env.VITE_WK_BACKEND_URL}/api/auth`;
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorageUtil.removeItem(StorageKeys.WK_ACCESS_TOKEN);
    localStorageUtil.removeItem(StorageKeys.WK_ACCOUNT_ID);
  };

  const fetchUserData = async (token: string) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_WK_BACKEND_URL}/api/user`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("t");
    const accountId = urlParams.get("i");

    if (token && accountId) {
      localStorageUtil.setItem(StorageKeys.WK_ACCESS_TOKEN, token);
      localStorageUtil.setItem(StorageKeys.WK_ACCOUNT_ID, accountId);

      setAccessToken(token);
      fetchUserData(token).then(() => {
        navigate('/u/dashboard');
      });
    } else {
      const storedToken = localStorageUtil.getItem<string>(StorageKeys.WK_ACCESS_TOKEN);
      const storedAccountId = localStorageUtil.getItem<string>(StorageKeys.WK_ACCOUNT_ID);

      if (storedToken && storedAccountId) {
        setAccessToken(storedToken);
        fetchUserData(storedToken);
      }
    }
  }, [navigate]);

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
