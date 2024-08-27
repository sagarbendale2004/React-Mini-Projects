import React, { useState } from "react";
import { addUser } from "../store/userReducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users.length ? users[users.length - 1].id + 1 : 1, // Handle empty array case
        name: user.name,
        email: user.email,
      })
    );

    // Clear form fields
    setUser({
      name: "",
      email: "",
    });

    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-info my-4">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
