import React from "react";
import { Link } from "@reach/router";

import { routes } from "../config";

import AppBar from "../components/AppBar";
import AppBody from "../components/AppBody";
import Avatar from "../components/Avatar";

const AppLayout = ({ children, onLogout, user }) => {
  return (
    <>
      <AppBar
        contentRight={
          <Avatar
            altText={`${user.firstName}, ${user.lastName}`}
            imageUrl={user.imageUrl}
          />
        }
        menu={
          <AppBar.Menu>
            {routes.map(route => {
              if (route.showInMenu) {
                return (
                  <AppBar.MenuItem key={route.id}>
                    <Link
                      getProps={({ isCurrent }) => {
                        return {
                          className: isCurrent ? "is-current" : null
                        };
                      }}
                      to={route.path}
                    >
                      {route.label}
                    </Link>
                  </AppBar.MenuItem>
                );
              }
              return null;
            })}
          </AppBar.Menu>
        }
      />
      <AppBody>{children}</AppBody>
    </>
  );
};

export default AppLayout;
