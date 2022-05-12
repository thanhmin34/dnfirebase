import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const hanldeRegister = async (e) => {
    e.preventDefault();

    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    console.log("cred", cred);
    toast.success("register successfully", {
      position: "top-right",
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="form-login">
      <h2>Register </h2>
      <form onSubmit={hanldeRegister} className="form-login">
        <div className="group-form">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="enter you email"
          />
        </div>
        <div className="group-form">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={pass}
            name="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="enter you password"
          />
        </div>
        <button className="btn btn-login">Register</button>
      </form>
    </div>
  );
};

export default Register;
