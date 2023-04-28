import React from "react";
import { redirect } from "react-router-dom";
import Login from "./Login";
import NavbarComponent from "../components/NavbarComponet";
import { toast } from "react-toastify";
import { setTokenId, getTokenId, verifyToken, clearToken } from "../utility";

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
    console.log(valid);
    if (!valid) {
      console.log("invalid");
      clearToken();
      return null;
    }
    console.log("valid");

    return null;
  }

  // get user info

  // get  bucket songs
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
  return (
    <>
      {man ? (
        <p>logged in</p>
      ) : (
        <div className="container">
          <NavbarComponent />
          <Login />
        </div>
      )}
    </>
  );
}

export default Bucket;