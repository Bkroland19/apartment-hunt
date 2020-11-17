import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../FirabaseConfig";
import logo from "../../Logo.png";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { logout } from "../../features/userSlice";

function Header() {
  const [bg, setBg] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 47) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);

  const Logout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        localStorage.removeItem("apartment-hunt");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={`position-sticky sticky-top w-100 ${bg && "bg-light"} `}>
      <nav className="container navbar navbar-expand-lg header bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" className="header__logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              to="/admin/myrent"
            >
              My Orders
            </NavLink>

            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              exact
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              exact
              to="/service"
            >
              Service
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              exact
              to="/contact"
            >
              Contact
            </NavLink>

            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              to="/admin/servicelist"
            >
              Dashboard
            </NavLink>

            <div className="loginBtn">
              {user && user.email ? (
                <button className="btn ml-3" onClick={Logout}>
                  LOGOUT
                </button>
              ) : (
                <NavLink className="nav-link btn ml-3 px-3 " to="/login">
                  LOGIN
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
