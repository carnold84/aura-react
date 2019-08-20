import React, { useRef, useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import useComponentSize from "@rehooks/component-size";

import { routes } from "../config";

import AppBar from "../components/AppBar";
import AppBody from "../components/AppBody";
import Avatar from "../components/Avatar";
import IconButton from "../components/IconButton";
import Logo from "../components/Logo";
import MenuDrawer from "./MenuDrawer";
import MenuIcon from "../components/icons/Menu";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const AppLayout = ({ children, onLogout, user }) => {
  const ref = useRef(null);
  const size = useComponentSize(ref);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = size;

  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  let menu = undefined;
  let contentCenter = <div />;
  let contentLeft = <div />;
  let contentRight = <div />;
  let drawerMenu = undefined;

  if (width > 767) {
    contentLeft = <Logo height={"26px"} style={{ margin: "0 0 0 5px" }} />;
    contentRight = (
      <Avatar
        altText={`${user.firstName} ${user.lastName}`}
        imageUrl={user.imageUrl}
        style={{ margin: "0 10px 0 0" }}
      />
    );
    menu = (
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
    );
  } else {
    contentRight = (
      <IconButton
        onClick={onMenuOpen}
        style={{ height: "50px", margin: "0 0 0 5px", width: "50px" }}
      >
        <MenuIcon />
      </IconButton>
    );
    contentCenter = <Logo height={"26px"} />;
    drawerMenu = (
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={onMenuClose}
        onLogout={onLogout}
        user={user}
      >
        {routes.map(route => {
          if (route.showInMenu) {
            return (
              <MenuDrawer.MenuItem key={route.id} to={route.path}>
                {route.label}
              </MenuDrawer.MenuItem>
            );
          }
          return null;
        })}
      </MenuDrawer>
    );
  }

  return (
    <Wrapper ref={ref}>
      <AppBar menu={menu}>
        {contentLeft}
        {contentCenter}
        {contentRight}
      </AppBar>
      {drawerMenu}
      <AppBody>{children}</AppBody>
    </Wrapper>
  );
};

export default AppLayout;
