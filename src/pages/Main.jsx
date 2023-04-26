import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponet";

function Main() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Main;
