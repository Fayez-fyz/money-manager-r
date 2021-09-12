import React from "react";
import { useHistory } from "react-router";

export const Header = () => {
  let history = useHistory();

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <a className="navbar-brand d-flex justify-content-center">
        <h4>MONEY MANAGER</h4>
      </a>
      <button
        className="btn-sm btn-danger "
        onClick={() => {
          window.localStorage.removeItem("app_token");
          history.push("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
};
