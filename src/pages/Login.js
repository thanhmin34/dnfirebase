import React, { useState } from "react";
import "../scss/login.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [used, setUsed] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fb = FacebookAuthProvider;
  const gg = GoogleAuthProvider;

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    const used = await signInWithEmailAndPassword(auth, email, password);
    if (used) {
      toast.success("Signin successfully", { position: "top-right" });
      await navigate("/");
    }
    // console.log(used);
  };

  const hanldeLogin = async (login) => {
    const logingg = await new login();
    const used = await signInWithPopup(auth, logingg)
      .then((er) => {
        if (er.user) {
          setUsed(er.user);
          console.log(er.user);
          toast.success("Signin  successfully", { position: "top-right" });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
            placeholder="enter you password"
          />
        </div>
        <button className="btn btn-login">Login</button>
      </form>
      <Link to="/register" className="a">
        you don't have an account
      </Link>
      <div className="login-social">
        <button onClick={() => hanldeLogin(fb)} className="btn ">
          <FaFacebookSquare /> <span className="ml-2">Login with Facebook</span>
        </button>

        <button onClick={() => hanldeLogin(gg)} className="btn ">
          <FcGoogle /> <span className="ml-2">Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
