import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import CloseIcon from "../components/icons/Close";
import IconButton from "../components/IconButton";

const Wrapper = styled.div`
  background-color: ${props => props.theme.drawer.bgColor};
  border-right: 1px solid ${props => props.theme.drawer.bgColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  transform: ${props =>
    props.isOpen ? "translate3d(0, 0, 0)" : "translate3d(-100%, 0, 0)"};
  transition: transform 200ms ease-out;
  width: 100%;
`;

const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.drawer.header.borderColor};
  display: flex;
  height: 60px;
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

const Content = styled.header`
  display: flex;
  flex-direction: column;
  margin: 60px 0 0;
`;

const Drawer = ({ children, isOpen, onClose, title, ...rest }) => {
  return (
    <Wrapper isOpen={isOpen} {...rest}>
      <Header>
        <Title>{title}</Title>
        <IconButton height={"60px"} onClick={onClose} width={"60px"}>
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
