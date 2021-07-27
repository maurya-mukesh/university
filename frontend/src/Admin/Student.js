import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import AdminTopBar from "./AdminTopBar";
import img from "./image/delete.png";
import { deleteAction } from "../Redux/action/adminAction";

const Student = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const deleteUser = useSelector((state) => state.deleteUser);
  const { success: successDelete } = deleteUser;

  useEffect(() => {
    setLoading(true);
    if (userInfo) {
      axios
        .get("/api/v1/admin/getAllUsers", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        })
        .then((res) => {
          console.log("res", res);
          setTimeout(() => {
            setLoading(false);
            setStudent(res.data);
          }, 2000);
        });
    } else {
      history.push("/");
    }
  }, [userInfo, history, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAction(id));

      history.push("/admin/student");
    }
  };

  console.log("student==>", student);
  return (
    <div>
      <AdminTopBar />
      <div className="mt-5">
        <table className="table table-bordered table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Admin</th>
              <th scope="col"></th>
              {/* <th scope="col">Delete</th> */}
            </tr>
          </thead>

          <tbody className="text-danger">
            {userInfo &&
              student.users?.map((item, i) => {
                console.log("=>", item);
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      {item.role === "admin" ? (
                        <span style={{ color: "green" }}>✔</span>
                      ) : (
                        <span style={{ color: "red" }}>❌</span>
                      )}
                    </td>
                    <td>
                      <Link to={`/admin/student/${item._id}/edit`}>
                        <button className="btn btn-sm">✍</button>
                      </Link>

                      <button
                        className="btn btn-sm"
                        onClick={() => deleteHandler(item._id)}
                      >
                        <img src={img} style={{ width: "15px" }} alt="delete" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {loading ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border text-danger"
              style={{ width: "50px", height: "50px" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Student;
