import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute({ children }) {
  const { token, user } = useAuth();
  const location = useLocation();

  // not authenticated: send to admin login
  if (!token) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }


  return children;
}
