// store JWT to local storage
const TOKEN_NAME = "BUCKET_TOKEN_ID";

//user
export const setTokenId = function (token) {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getTokenId = function () {
  return localStorage.getItem(TOKEN_NAME);
};

export const clearToken = function () {
  localStorage.removeItem(TOKEN_NAME);
};

export const verifyToken = async function (token) {
  if (!token) {
    return false;
  }
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/user/authenticate_token",
      {
        method: "POST",
        headers: {
          token: token,
        },
      }
    );
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getUserInfo = async function (token) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/user/user_info?token=${token}`
    );
    if (!response.ok) {
      return false;
    }

    return response.json();
  } catch (err) {
    console.log(err);
    return false;
  }
};

//bucket
export const getBuckets = async function (toke) {};
export const getBucket = async function (requestDetails) {};

//songs
export const dropSongInBucket = async function (requestDetails) {};

//sportify
export const sportify_auth = async function (requestDetails) {};

export const addTokenInfo = async function (requestDetails) {};
