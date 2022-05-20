import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import styled from "./home.module.scss";
import { signOut } from "firebase/auth";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const { used } = useAuth();
  // console.log(used);

  const hanldeSignOut = async () => {
    await auth.signOut();
    toast.error("success", { position: "top-right" });
    await navigate("/login");

    // toast.success("Signin successfully", { position: "top-right" });
  };
  // console.log(used);
  return (
    <div>
      <div className="log">
        {used.displayName || used.email ? (
          <h1>Chào mừng {used.displayName || used.email} đến với Avatar 2</h1>
        ) : (
          <h1>Chào mừng bạn đến với Avatar hãy đăng nhập để tận hưởng</h1>
        )}
        {used.displayName || used.email ? (
          <button className="btn-logOut" onClick={hanldeSignOut}>
            SignOut
          </button>
        ) : (
          <button onClick={() => navigate("/login")} className="btn-logOut">
            login
          </button>
        )}
      </div>
      <div className={styled.used}>
        <div className="info-used">
          <img
            src="https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg"
            alt=""
          />
          {/* <span>Minh Hoang</span> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
