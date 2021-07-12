import React, { useState, useEffect } from "react";
import "./App.scss";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin/Admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import HouseDetails from "./pages/HouseDetails/HouseDetails";
import ComingSoon from "./pages/ErrorPage/ComingSoon";

import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      login({
        ...(JSON.parse(localStorage.getItem("apartment-hunt")) || {}),
      })
    );
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/housedetails/:id">
          <Header />
          <HouseDetails></HouseDetails>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/admin/:pagename">
          <Admin />
        </PrivateRoute>
        <Route path="/about">
          <ComingSoon />
        </Route>
        <Route path="/service">
          <ComingSoon />
        </Route>
        <Route path="/contact">
          <ComingSoon />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
