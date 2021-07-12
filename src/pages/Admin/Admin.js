import React, { useEffect } from "react";
import logo from "../../Logo.png";
import { useParams, NavLink, Link, useHistory } from "react-router-dom";
import AddRentHouse from "../AddRentHouse/AddRentHouse";
import MyRent from "../MyRent/MyRent";
import BookingList from "../BookingList/BookingList";
import { Avatar } from "@material-ui/core";
import "./Admin.style.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Admin() {
  const user = useSelector(selectUser);
  const pagename = useParams().pagename;
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);

  return (
    <div className="admin">
      <div className="header py-3">
        <div className="row">
          <div className="col-3 ">
            <Link to="/">
              <img
                src={logo}
                style={{ height: "54px", paddingLeft: "20px" }}
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-9 d-flex justify-content-between align-items-center pr-4">
            <h4 style={{ textTransform: "capitalize" }}>{pagename}</h4>
            <p className="ml-auto mr-2">{user.name}</p>
            <Avatar alt={user.name} src={user.image} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-3 customer__sidebar">
            <ul className="ml-md-3">
              <li className="my-3">
                <NavLink
                  className={` my-3 ${
                    pagename === "bookinglist" ? "text-success" : "text-light"
                  }`}
                  to="/admin/bookinglist"
                >
                  <i className="fas fa-suitcase-rolling"></i> Booking List
                </NavLink>
              </li>
              <li className="my-3">
                <NavLink
                  className={` my-3 ${
                    pagename === "addrenthouse" ? "text-success" : "text-light"
                  }`}
                  to="/admin/addrenthouse"
                >
                  <i className="fas fa-plus"></i> Add Rent House
                </NavLink>
              </li>
              <li className="my-3">
                <NavLink
                  className={` my-3 ${
                    pagename === "myrent" ? "text-success" : "text-light"
                  } `}
                  to="/admin/myrent"
                >
                  <i className="fas fa-user-plus"></i> My Rent
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-10 col-9 customer__right py-4">
            <h2 className="text-center">
              Welcome to <span className="text-info">{user.name}</span>{" "}
              Dashboard
            </h2>
            {pagename === "bookinglist" && <BookingList user={user} />}
            {pagename === "addrenthouse" && <AddRentHouse user={user} />}
            {pagename === "myrent" && <MyRent user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
