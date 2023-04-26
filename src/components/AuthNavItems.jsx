import React from "react";
import Nav from "react-bootstrap/Nav";

function AuthNavItems() {
  return (
    <>
      <Nav className="me-auto">
        <Nav.Link href="Login" className="text-secondary">
          login
        </Nav.Link>

        <Nav.Link href="signup" className="text-secondary">
          Create Account
        </Nav.Link>
      </Nav>
    </>
  );
}

export default AuthNavItems;
