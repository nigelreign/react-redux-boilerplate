import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo !== null) {
      return true;
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn()) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
