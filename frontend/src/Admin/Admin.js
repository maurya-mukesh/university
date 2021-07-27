import React from "react";
import AdminComponent from "./AdminComponent";
import "./Admin.css";
import Dashboard from "../pages/Dashboard"

const Admin = () => {
  return (
    <div className="Admin">
      <Dashboard />
      <AdminComponent/>
    </div>
  );
};

export default Admin;
