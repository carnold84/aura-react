import React, { cloneElement, useState } from "react";
import styled from "styled-components";

import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Drawer from "../../components/Drawer";
import Loading from "../../components/Loading";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const List = styled.ul`
  flex-grow: 1;
  padding: 15px 0;
`;

const User = styled.div`
  align-items: center;
  border: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`;

const UserDisplay = styled.div`
  align-items: center;
  display: flex;
`;

const UserName = styled.p`
  font-size: 1rem;
`;

const MenuDrawer = ({ children, isOpen, onClose, onLogout, user }) => {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const menuItems = children.map(child => {
    return cloneElement(child, {
      onClose
    });
  });

  const onSignOut = () => {
    setIsSigningOut(true);
    onLogout();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <Content>
        <List>{menuItems}</List>
        {user && (
          <User>
            <UserDisplay>
              <Avatar
                altText={`${user.firstName} ${user.lastName}`}
                imageUrl={user.imageUrl}
                style={{ height: "40px", margin: "0 10px 0 0", width: "40px" }}
              />
              <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
            </UserDisplay>
            <Button onClick={!isSigningOut ? onSignOut : null}>
              {isSigningOut ? <Loading /> : "Sign Out"}
            </Button>
          </User>
        )}
      </Content>
    </Drawer>
  );
};

export default MenuDrawer;
