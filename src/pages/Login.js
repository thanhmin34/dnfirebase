import React, { useState } from "react";
import "../scss/login.scss";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    const used = await signInWithEmailAndPassword(auth, email, password);
    console.log(used);
    if (used) {
      toast.success("Signin successfully", { position: "top-right" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const signFb = async () => {
    const provider = await new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        if (re.user) {
          console.log(re.user);
          toast.success("Signin Fb successfully", { position: "top-right" });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
  };

  const signInWithGoogle = async () => {
    const logingg = await new GoogleAuthProvider();
    signInWithPopup(auth, logingg)
      .then((er) => {
        if (er.user) {
          console.log(er.user);
          toast.success("Signin Gg successfully", { position: "top-right" });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
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
      <Link to="/register" className="a">
        you don't have an account
      </Link>
      <div className="login-social">
        <button onClick={signFb} className="btn">
          Login bang fb
        </button>
        <button onClick={signInWithGoogle} className="btn">
          Login bang gg
        </button>
      </div>
    </div>
  );
};

export default Login;
