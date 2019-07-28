import React, { useState } from "react";
import { Link } from "@reach/router";

import { routes } from "../config";

import AppBar from "../components/AppBar";
import AppBody from "../components/AppBody";
import Drawer from "../components/Drawer";
import IconButton from "../components/IconButton";
import MenuIcon from "../components/icons/Menu";
import Logo from "../components/Logo";

const AppLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <AppBar
        contentLeft={
          <>
            <IconButton
              height={"60px"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              width={"60px"}
            >
              <MenuIcon />
            </IconButton>
            <Logo height={"30px"} />
          </>
        }
        contentRight={
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
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        Drawer
      </Drawer>
      <AppBody>{children}</AppBody>
    </>
  );
};

export default AppLayout;
