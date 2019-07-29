import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";

import Logo from "../Logo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  @media ${device.tablet} {
    margin: 0;
    max-width: 600px;
    padding: 40px 45px;
  }
`;

const AppBar = ({ contentLeft, contentRight, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Main>
        <Logo height={"26px"} style={{ margin: "0 0 0 15px" }} />
      </Main>
      <Menu>{contentRight}</Menu>
    </Wrapper>
  );
};

const { any } = propTypes;

AppBar.propTypes = {
  contentRight: any
};

AppBar.defaultProps = {};

export default AppBar;
