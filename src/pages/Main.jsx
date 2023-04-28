import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponet";
import { getTokenId, verifyToken, clearToken } from "../utility";

export const mainLoader = async function () {
  // veriify token
  const token = getTokenId();
  if (!token) {
    clearToken();
    return false;
  } else {
    const valid = await verifyToken(token);
    if (!valid) {
      clearToken();
      return false;
    }

    return true;
  }
};

function Main() {
  const authStatus = useLoaderData();
  return (
    <>
      <div className="container">
        <NavbarComponent status={authStatus} />
        <Outlet />
      </div>
    </>
  );
}

export default Main;
