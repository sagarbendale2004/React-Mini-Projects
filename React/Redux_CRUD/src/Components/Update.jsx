import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../store/userReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingUser = users.find((user) => user.id == id);
  const [user, setUser] = useState({
    name: existingUser ? existingUser.name : "",
    email: existingUser ? existingUser.email : "",
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: user.name,
        email: user.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name" className="my-2">
              Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="my-2">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <button className="btn btn-info my-4">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
