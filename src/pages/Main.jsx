import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

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
