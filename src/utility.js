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
      console.log(response);
      return false;
    }

    return await response.json();
  } catch (err) {
    return false;
  }
};

//bucket
export const getBuckets = async function (toke) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/bucket/all_buckets?token=${token}`
    );
    if (!response.ok) {
      return false;
    }
    return await response.json();
  } catch (err) {
    return false;
  }
};
export const getBucket = async function ({ bucketName, token }) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/bucket/all_buckets?token=${token}&bucket_name=${bucketName}`
    );
    if (!response.ok) {
      return false;
    }
    return await response.json();
  } catch (err) {
    return false;
  }
};

//songs
export const dropSongInBucket = async function (songDetails, token) {
  try {
    response = await fetch(`http://127.0.0.1:8000/songs/add_to_bucket`, {
      method: "POST",
      headers: {
        token: token,
      },
      body: {
        ...songDetails,
      },
    });
    if (!response.ok) {
      return false;
    }

    return await response.json();
  } catch (err) {
    return false;
  }
};

//sportify
export const sportify_auth = async function () {
  try {
    console.log("kk");
    const response = await fetch(`http://127.0.0.1:8000/sportify/authenticate`);
    if (response.ok) {
      console.log("re");
      const url = await response.json();
      window.location.href = url.url;
      console.log(window.location);
    }
  } catch (err) {
    console.log(err);
  }
};

export const addTokenInfo = async function ({ token, code }) {
  const data = { code: code };
  console.log(data);
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/sportify/add_token_info?code=${code}`,
      {
        method: "POST",
        headers: {
          "x-token": token,
        },
      }
    );
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
