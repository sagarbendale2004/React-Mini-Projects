import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

function Login() {
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserName = localStorage.getItem(user.Username);
    const parsedUserData = JSON.parse(storedUserName);

    if (parsedUserData) {
      alert("Login successful");
    } else {
      console.log("Invalid credentials");
    }

    setUser({
      Username: "",
      Password: "",
    });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Username - </label>
          <input
            type="text"
            name="Username"
            value={user.Username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password - </label>
          <input
            type="password"
            name="Password"
            value={user.Password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an Account? <br />{" "}
          <span>
            <Link to="/register">Register Here</Link>
          </span>
        </p>
      </form>
    </>
  );
}

export default Login;
