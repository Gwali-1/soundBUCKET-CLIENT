import React from "react";
import { Outlet, useLoaderData, redirect } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponet";
import {
  getTokenId,
  verifyToken,
  clearToken,
  getUserInfo,
  sportify_auth,
} from "../utility";
import { toast } from "react-toastify";

export const mainLoader = async function () {
  // veriify token
  const token = getTokenId();
  if (!token) {
    return false;
  } else {
    const valid = await verifyToken(token);
    if (!valid) {
      toast.info("Session Expired");
      clearToken();
      return false;
    }

    const userInfo = await getUserInfo(token);
    if (!userInfo) {
      clearToken();
      toast.info("Session Expired");
      redirect("/");
    }

    return { userInfo };
  }
};

function Main() {
  const user = useLoaderData();
  return (
    <>
      <div className="container">
        <button
          onClick={async () => {
            console.log("clicked");
            await sportify_auth();
          }}
        >
          press
        </button>
        <NavbarComponent status={user} />
        <Outlet />
      </div>
    </>
  );
}

export default Main;
