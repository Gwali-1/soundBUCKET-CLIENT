import React from "react";
import Nav from "react-bootstrap/Nav";
import { clearToken } from "../utility";

function LogOutNavItem({ logOut }) {
  const logUserOut = function (e) {
    logOut();
    clearToken();
  };
  return (
    <>
      <Nav className="me-auto">
        <Nav.Link className="text-danger" onClick={logUserOut}>
          Log Out
        </Nav.Link>
      </Nav>
    </>
  );
}

export default LogOutNavItem;
