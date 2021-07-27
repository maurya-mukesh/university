import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
// import { PATH } from "./../../config/webPath";
import { PATH } from "../../config/webPath";
import "./Layout.css";

const Layout = ({ children }) => {
  //   const match = useRouteMatch();
  const location = useLocation();

  const show_Side_Top_bar = Object.values(PATH).includes(location.pathname);

  return (
    <div>
      {show_Side_Top_bar ? (
        <div className="App">
          <div className="overlay"></div>

          <div className="sidebar">
            <Sidebar />
          </div>

          <div className="main-area">
            <div className="topbar">
              <TopBar />
            </div>

            <div className="router">
              <div className="router1">{children}</div>
            </div>
          </div>
        </div>
      ) : (
        <div> {children}</div>
      )}
    </div>
  );
};

export default Layout;
