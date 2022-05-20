import React from "react";
import { auth } from "../firebase/config";

const Admin = () => {
  const hanldeSignOut = () => {
    auth.signOut();
  };
  return (
    <div>
      admin
      <button onClick={hanldeSignOut}>logOut</button>
    </div>
  );
};

export default Admin;
