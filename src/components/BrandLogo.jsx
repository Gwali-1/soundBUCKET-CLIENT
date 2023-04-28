import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import AuthNavItems from "./AuthNavItems";
import LogOutNavItem from "./LogOutNavItem";

function BrandLogo({ status }) {
  const [loggedInStatus, setLoggedInStatus] = useState(status);

  const changeStatus = function () {
    setLoggedInStatus((current) => !current);
  };
  return (
    <Navbar>
      <Navbar.Brand href="/" className="text-success">
        soundBUCKET
      </Navbar.Brand>
      {loggedInStatus ? (
        <LogOutNavItem logOut={changeStatus} />
      ) : (
        <AuthNavItems />
      )}
    </Navbar>
  );
}

export default BrandLogo;
