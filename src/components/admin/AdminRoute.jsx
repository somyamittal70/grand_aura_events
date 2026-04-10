import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
<<<<<<< HEAD
  const admin = JSON.parse(localStorage.getItem("admin"));

  if (!admin) {
    return <Navigate to="/admin/login" />;
=======
  const token = localStorage.getItem("admin_token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
>>>>>>> fe4c9d8 (Updated project)
  }

  return children;
}