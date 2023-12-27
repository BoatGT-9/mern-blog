
import { useState } from "react";
import { Navigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_BASE_URL;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseURL}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("ลงทะเบียนสำเร็จ!!");
      return <Navigate to="/" />;
    } else {
      alert("ลงทะเบียนไม่สำเร็จ!!");
    }
  };

  return (
    <div>
      <div className="form-panel two">
        <div className="form-header">
          <h1>Register Account</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required="required"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                required="required"
              />
            </div>
            <div className="form-group">
              <button type="submit" onClick={register}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
