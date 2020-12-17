import { Route, Redirect } from "react-router-dom";
import React from "react";

export const AuthenticatedPage = ({ children, user, ...rest }: any) => {
  const token = localStorage.getItem("token");
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    </>
  );
};
