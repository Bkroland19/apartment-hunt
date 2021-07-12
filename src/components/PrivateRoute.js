import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function PrivateRoute({ children, ...rest }) {
  let user = useSelector(selectUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
