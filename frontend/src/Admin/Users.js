import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userDetailsById } from "./../Redux/action/userAction";
import { updateUserAction } from "./../Redux/action/adminAction";
import { USER_RESET_SUCCESS } from "./../Redux/actionType/adminActionType";

const Users = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [message, setMessage] = useState(null);
  const { id } = useParams();

  const userDetails = useSelector((state) => state.userDetails);
  console.log("user details", userDetails)
  const { user } = userDetails;
  const updateUser = useSelector((state) => state.updateUser);
  const { loading, success } = updateUser;

  console.log(user);
  const { userData } = user;
  console.log("====>>>",userData);

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_RESET_SUCCESS });
      setTimeout(() => {
        
        history.push("/admin/student");
      }, 2000);
    } else {
      if (user.userData?._id !== id) {
        dispatch(userDetailsById(id));
      } else {
        setName(user.userData?.name);
        setEmail(user.userData?.email);
        setRole(user.userData?.role);
      }
    }
  }, [success, user, id, dispatch, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({ _id: id, name, email, role }));
    setMessage("Updated Successfully!");
    console.log("hey");
  };

  return (
    <>
      <div>
        {/* <AdminTopBar />
        <AdminSidebar /> */}
        <div
          className="w3-main"
          style={{ marginLeft: "300px", marginTop: "43px" }}
        ></div>
        <div style={{ marginRight: "210px" }}>
          <form
            onSubmit={handleSubmit}
            className="w3-right bg-dark rounded-2 text-white shadow p-4"
            style={{ width: "40%", margin: "80px" }}
          >
            <h2 className="text-center text-success">Edit User</h2>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Update
            </button>
            {loading ? (
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border text-success"
                  style={{ width: "50px", height: "50px" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="bg-success mt-2">{message}</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default Users;
