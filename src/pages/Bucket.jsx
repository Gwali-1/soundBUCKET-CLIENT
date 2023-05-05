import React, { useState } from "react";
import { redirect, useLoaderData, Outlet } from "react-router-dom";

import Login from "./Login";
import NavbarComponent from "../components/NavbarComponet";
import { toast } from "react-toastify";
import {
  setTokenId,
  getTokenId,
  verifyToken,
  clearToken,
  addTokenInfo,
  getUserInfo,
} from "../utility";
import BucketContent from "../components/BucketContent";

//bucket loader
export const bucketLoader = async function () {
  console.log("bucket");
  const returnData = {};
  // veriify token
  const token = getTokenId();
  if (!token) {
    return null;
  }
  const valid = await verifyToken(token);
  if (!valid) {
    clearToken();
    toast.info("Session Expired");
    return null;
  }

  const userInfo = await getUserInfo(token);
  if (!userInfo) {
    return null;
  }
  console.log("hh");
  return userInfo;
};
//authorizer
export const codeLoader = async () => {
  console.log("code route");
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  const token = getTokenId();
  const authorized = await addTokenInfo({ code, token });
  if (!authorized) {
    toast.info("Sportify Authorizaton failed");
  }
  toast.success(authorized.message);
  return redirect("/bucket");
};
//action
export const bucketAction = async ({ request }) => {
  const form = await request.formData();
  const { _action, ...formData } = Object.fromEntries(form);

  try {
    const response = await fetch("http://127.0.0.1:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${formData.username}&&password=${formData.password}`,
    });

    if (!response.ok) {
      throw new Error("invalid credentials");
    }
    const responseData = await response.json();
    setTokenId(responseData.access_token);
    toast.success("Welcome");
  } catch (err) {
    toast.error("Invalid Username or Password");
  }
  return null;
};

function Bucket() {
  const [userStatus, setUserStatus] = useState(useLoaderData());

  return (
    <>
      <Outlet />
      {userStatus === null ? (
        <div className="container">
          <NavbarComponent />
          <Login />
        </div>
      ) : (
        <div className="container">
          <BucketContent userInfo={userStatus} setUserStatus={setUserStatus} />
        </div>
      )}
    </>
  );
}

export default Bucket;
