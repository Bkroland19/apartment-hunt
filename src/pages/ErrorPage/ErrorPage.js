import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.style.css";

function ErrorPage() {
  return (
    <div className="error">
      <div className="error__box">
        <h1>404 NOT FOUND</h1>
        <Link to="/" className="btn btn-info">
          GO TO HOME
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
