import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    Username: "",
    PassWord: "",
    MobileNo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(user.Username, JSON.stringify(user));
    setUser({
      Username: "",
      PassWord: "",
      MobileNo: "",
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Username - </label>
          <input
            type="text"
            value={user.Username}
            name="Username"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>PassWord - </label>
          <input
            type="password"
            value={user.PassWord}
            name="PassWord"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>MobileNo - </label>
          <input
            type="text"
            value={user.MobileNo}
            name="MobileNo"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
        <p>
          have an Account? <br />{" "}
          <span>
            <Link to="/login">Login Here</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
