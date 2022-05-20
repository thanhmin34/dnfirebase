import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";

const Register = () => {
  const [values, setValues] = useState({ email: "", pass: "" });
  const hanldeChang = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const hanldeRegister = async (e) => {
    e.preventDefault();
    const cred = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.pass
    );
    console.log("cred", cred);
    toast.success("register successfully", {
      position: "top-right",
    });
  };
  console.log(values);
  return (
    <div className="form-login">
      <h2>Register </h2>
      <form onSubmit={hanldeRegister} className="form-login">
        <div className="group-form">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={values.email}
            onChange={hanldeChang}
            name="email"
            placeholder="enter you email"
          />
        </div>
        <div className="group-form">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={values.pass}
            name="pass"
            onChange={hanldeChang}
            placeholder="enter you password"
          />
        </div>
        <button className="btn btn-login">Register</button>
      </form>
    </div>
  );
};

export default Register;
