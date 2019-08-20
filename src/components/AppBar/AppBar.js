import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  width: 100%;
`;

const Main = styled.div`
  align-items: center;
  background-color: ${props => props.theme.appBar.bgColor};
  border-bottom: 1px solid ${props => props.theme.appBar.borderColor};
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0;
  width: 100%;
`;

const Menu = styled.div`
  align-items: center;
  background-color: ${props => props.theme.appBar.bgColor};
  border-bottom: 1px solid ${props => props.theme.appBar.borderColor};
  display: flex;
  height: 50px;
  overflow-x: auto;
  overflow-y: hidden;

  @media ${device.mobileL} {
    background-color: transparent;
    border-bottom: none;
    margin: 0;
    position: absolute;
    right: 80px;
    top: 0;
  }
`;

const AppBar = ({ children, menu, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Main>{children}</Main>
      {menu && <Menu>{menu}</Menu>}
    </Wrapper>
  );
};

const { any } = propTypes;

AppBar.propTypes = {
  children: any,
  menu: any
};

AppBar.defaultProps = {};

export default AppBar;
