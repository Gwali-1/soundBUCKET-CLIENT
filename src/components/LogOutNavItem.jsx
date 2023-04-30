import React from "react";
import Nav from "react-bootstrap/Nav";
import { clearToken } from "../utility";
import { toast } from "react-toastify";
import Person4Icon from "@mui/icons-material/Person4";

function LogOutNavItem({ logOut, userInfo }) {
  const logUserOut = function (e) {
    logOut();
    clearToken();
    toast.success("Bye!");
  };
  return (
    <>
      <Nav className="me-auto">
        <Nav.Link className="text-secondary">
          <Person4Icon />
          {userInfo.userInfo.username}
        </Nav.Link>
        <Nav.Link className="text-danger" onClick={logUserOut}>
          Log Out
        </Nav.Link>
      </Nav>
    </>
  );
}

export default LogOutNavItem;
