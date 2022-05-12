import React from "react";
import styled from "./home.module.scss";
const Home = () => {
  return (
    <div>
      <h1>Chào mừng bạn đến với Trang chủ</h1>
      <div className={styled.used}>
        <div className="info-used">
          <img
            src="https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg"
            alt=""
          />
          <span>Minh Hoang</span>
        </div>
        <button>SignOut</button>
      </div>
    </div>
  );
};

export default Home;
