import React from "react";
import Navbar from "react-bootstrap/Navbar";
import AuthNavItems from "./AuthNavItems";

function BrandLogo() {
  return (
    <Navbar>
      <Navbar.Brand href="/" className="text-success">
        soundBUCKET
      </Navbar.Brand>
      <AuthNavItems />
    </Navbar>
  );
}

export default BrandLogo;
