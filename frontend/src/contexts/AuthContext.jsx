import React, { createContext, useContext, useEffect, useState } from "react";
import { apiRequest } from "../../utils/apiClient";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("ACCESS_TOKEN"));
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("USER") || "null");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER");
      setUser(null);
    }
  }, [token]);

  const login = async ({ email, password }) => {
    // adapt endpoint to your backend (logs show /api/v1/auth/login)
    const res = await apiRequest("/auth/login", "POST", { email, password });
    // backend may return different shapes, handle common cases:
    const accessToken = res.access_token
    const userPayload = res.user
    if (!accessToken) {
      throw new Error("Login response did not include an access token");
    }
    setToken(accessToken);
    if (userPayload) {
      setUser(userPayload);
      localStorage.setItem("USER", JSON.stringify(userPayload));
    }
    return { accessToken, user: userPayload };
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
