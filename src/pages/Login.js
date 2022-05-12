import React, { useState } from "react";
import "../scss/login.scss";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    const used = await signInWithEmailAndPassword(auth, email, password);

    toast.success("Signin successfully", { position: "top-right" });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="form-login">
      <h2>Login </h2>
      <form onSubmit={hanldeSubmit} className="form-login">
        <div className="group-form">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className=""
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="enter you email"
          />
        </div>
        <div className="group-form">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className=""
            placeholder="enter you email"
          />
        </div>
        <button className="btn btn-login">Login</button>
      </form>
      <div className="login-social">
        <button className="btn">Login bang fb</button>
        <button className="btn">Login bang gg</button>
      </div>
    </div>
  );
};

export default Login;
