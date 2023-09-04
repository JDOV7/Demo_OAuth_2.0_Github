import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <Outlet>
        <div ></div>
      </Outlet>
    </>
  );
};

export default AuthLayout;
