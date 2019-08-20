import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import CloseIcon from "../components/icons/Close";
import IconButton from "../components/IconButton";

const Wrapper = styled.div`
  background-color: ${props => props.theme.drawer.bgColor};
  border-right: 1px solid ${props => props.theme.drawer.bgColor};
  clip-path: polygon(100% 0, 200% 0, 200% 100%, 100% 100%);
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  transition: clip-path 250ms ease-in-out;
  width: 100%;

  &.is-open {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.drawer.header.borderColor};
  display: flex;
  height: 50px;
  justify-content: space-between;
  left: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Title = styled.h3`
  color: ${props => props.theme.drawer.title.color};
  font-size: 1.2rem;
  margin: 0 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 50px 0 0;
`;

const Drawer = ({ children, isOpen, onClose, title, ...rest }) => {
  return (
    <Wrapper className={isOpen ? "is-open" : null} isOpen={isOpen} {...rest}>
      <Header>
        <Title>{title}</Title>
        <IconButton
          onClick={onClose}
          style={{ height: "50px", margin: "0 0 0 5px", width: "50px" }}
        >
          <CloseIcon />
        </IconButton>
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const { any, bool, func, string } = propTypes;

Drawer.propTypes = {
  children: any,
  isOpen: bool,
  onClose: func,
  title: string
};

Drawer.defaultProps = {
  show: false
};

export default Drawer;
