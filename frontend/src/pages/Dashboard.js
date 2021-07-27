import React from "react";
import DashProfile from "../components/DashProfile";
import "./pageStyle/Dashboard.css";
import { useSelector } from "react-redux";
import AdminComponent from "../Admin/AdminComponent";

const Dashboard = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div className="dash-container">
      {userInfo?.user.role === "user" ? <DashProfile /> : <AdminComponent/>}
    </div>
  );
};

export default Dashboard;
  