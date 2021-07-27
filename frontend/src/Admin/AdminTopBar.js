import React from 'react'
import { Link } from "react-router-dom";
import { logout } from "../Redux/action/userAction";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PATH } from '../config/webPath';

const AdminTopBar = () => {

    const history = useHistory();
    const dispatch = useDispatch();
  //LOGOUT ONCLICK FUNC ==========>
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
    console.log("logout");
  };
  return (
    <>
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          onClick="w3_open()"
        >
          <i className="fa fa-bars"></i>  Menu
        </button>
        <Link to={PATH.DASHBOARD}>
          <span className="w3-bar-item w3">Logo</span>
        </Link>
        {/* LOGOUT===============> */}
        <button
          className="btn btn-danger text-white w3-right m-2"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </>
  );
}

export default AdminTopBar
