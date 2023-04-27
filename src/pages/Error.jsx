import React from "react";
import { useRouteError, Link, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>we have a problem</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <Link to="/" className="btn btn--dark">
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}

export default Error;
