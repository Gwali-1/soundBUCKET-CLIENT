import React from "react";
import { Outlet, useLoaderData, redirect } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponet";
import { getTokenId, verifyToken, clearToken, getUserInfo } from "../utility";
import { toast } from "react-toastify";

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

    const userInfo = await getUserInfo(token);
    if (!userInfo) {
      redirect("/");
    }

    return { userInfo };
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
