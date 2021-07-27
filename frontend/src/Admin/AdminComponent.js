import React from "react";
import { Link } from "react-router-dom";
// import AdminTopBar from "./AdminTopBar";
import { useSelector } from "react-redux";

const AdminComponent = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <div className="adminComponent d-flex flex-row mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>Welcome, {userInfo?.user.name}</h4>
                    <p className="text-danger mb-1">Role: {userInfo?.user.role}</p>
                    <p className="text-primary font-size-sm">
                      Git hub : https://github.com/{userInfo?.user.name}-au13
                    </p>
                    <button className="btn btn-primary m-1">
                      Change Avatar
                    </button>
                    <button className="btn btn-outline-primary m-2">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card">
              <Link to="admin/student">
                <div className="w3-container w3-orange w3-text-white w3-padding-16">
                  <div className="w3-left">
                    <p className="fa fa-users w3-xxxlarge"></p>
                  </div>
                  <div className="w3-right">
                    <h3>50</h3>
                  </div>
                  <div className="w3-clear"></div>
                  <h4>Users</h4>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link to="#">
                <div className="w3-container w3-green w3-text-white w3-padding-16">
                  <div className="w3-left">
                    <i className="fa fa-id-badge w3-xxxlarge"></i>
                  </div>
                  <div className="w3-right">
                    <h3>360</h3>
                  </div>
                  <div className="w3-clear"></div>
                  <h4>Students</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card">Instructor Feedback</div>
          </div>
          <div className="col-md-5">
            <div className="card">Today Attendance Percentage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
