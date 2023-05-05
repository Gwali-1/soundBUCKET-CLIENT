import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import AuthNavItems from "./AuthNavItems";
import LogOutNavItem from "./LogOutNavItem";

function BrandLogo({ userInfo }) {
  const [userStatus, setUserLoggedInStatus] = useState(userInfo);

  const changeStatus = function () {
    setUserLoggedInStatus((current) => !current);
  };

  return (
    <Navbar>
      <Navbar.Brand href="/" className="text-success">
        soundBUCKET
      </Navbar.Brand>
      {userStatus ? (
        <LogOutNavItem logOut={changeStatus} userInfo={userInfo} />
      ) : (
        <AuthNavItems />
      )}
    </Navbar>
  );
}

export default BrandLogo;
