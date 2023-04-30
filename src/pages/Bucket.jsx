import React from "react";
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
} from "../utility";

export const bucketLoader = async function () {
  console.log("bucket");
  const returnData = {};
  // veriify token
  const token = getTokenId();
  if (!token) {
    clearToken();
    return null;
  } else {
    const valid = await verifyToken(token);
    if (!valid) {
      clearToken();
      toast.info("Session Expired");
      return null;
    }
    return "true";
  }
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
    console.log(responseData);
    toast.success("Welcome");
    setTokenId(responseData.access_token);
  } catch (err) {
    console.log(err);
    toast.error("Invalid Username or Password");
  }
  return null;
};

let man = false;

function Bucket() {
  const loadDAta = useLoaderData();
  console.log(loadDAta);

  return (
    <>
      <Outlet />
      {loadDAta === null ? (
        <div className="container">
          <NavbarComponent />
          <Login />
        </div>
      ) : (
        <p>logged in</p>
      )}
    </>
  );
}

export default Bucket;
