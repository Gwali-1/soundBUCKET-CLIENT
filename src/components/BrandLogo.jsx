import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import AuthNavItems from "./AuthNavItems";
import LogOutNavItem from "./LogOutNavItem";

function BrandLogo({ status }) {
  const [userStatus, setUserLoggedInStatus] = useState(status);

  const changeStatus = function () {
    setUserLoggedInStatus((current) => !current);
  };

  return (
    <Navbar>
      <Navbar.Brand href="/" className="text-success">
        soundBUCKET
      </Navbar.Brand>
      {userStatus ? (
        <LogOutNavItem logOut={changeStatus} userInfo={status} />
      ) : (
        <AuthNavItems />
      )}
    </Navbar>
  );
}

export default BrandLogo;
