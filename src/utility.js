// store JWT to local storage
const TOKEN_NAME = "BUCKET_TOKEN_ID";

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
    if (response.ok) {
      console.log("ok");
      return true;
    } else {
      console.log("not");
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
