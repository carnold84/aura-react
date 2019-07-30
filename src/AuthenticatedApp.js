import React from "react";
import { Router, Redirect } from "@reach/router";

import AppLayout from "./containers/AppLayout";

import { useAuth } from "./providers/AuthProvider";

import { routes } from "./config";
import { useUser } from "./providers/UserProvider";

const AuthenticatedApp = () => {
  const { logout } = useAuth();
  const { user } = useUser();

  return (
    <AppLayout onLogout={logout} user={user}>
      <Router>
        <Redirect from={"/"} to={"/home"} noThrow />
        {routes.map(route => {
          return <route.component key={route.id} path={route.path} />;
        })}
      </Router>
    </AppLayout>
  );
};

export default AuthenticatedApp;
