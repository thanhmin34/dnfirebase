import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const [values, setValues] = useState({ email: "", pass: "" });
  const hanldeChang = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (value) => {
    console.log(value);
    const cred = await createUserWithEmailAndPassword(
      auth,
      value.email,
      value.pass
    );
    toast.success("register successfully", {
      position: "top-right",
    });
    await auth.signOut();
    await navigate("/login");
  };

  // const hanldeRegister = async (e) => {
  //   e.preventDefault();
  //   const cred = await createUserWithEmailAndPassword(
  //     auth,
  //     values.email,
  //     values.pass
  //   );
  //   console.log("cred", cred);
  //   toast.success("register successfully", {
  //     position: "top-right",
  //   });
  //   await auth.signOut();
  //   await navigate("/login");
  // };

  // console.log(values);
  return (
    <div className="form-login">
      <h2>Register </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        <div className="group-form">
          <label htmlFor="">Email</label>
          <input
            type="email"
            defaultValue={values.email}
            onChange={hanldeChang}
            {...register("email")}
            name="email"
            placeholder="enter you email"
          />
        </div>
        <div className="group-form">
          <label htmlFor="">Password</label>
          <input
            type="password"
            defaultValue={values.pass}
            name="pass"
            onChange={hanldeChang}
            {...register("pass")}
            placeholder="enter you password"
          />
        </div>
        <button className="btn btn-login">Register</button>
      </form>
    </div>
  );
};

export default Register;
