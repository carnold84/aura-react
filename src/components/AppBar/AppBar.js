import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.appBar.bgColor};
  border-bottom: 1px solid ${props => props.theme.appBar.borderColor};
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0;
  width: 100%;
`;

const Control = styled.div`
  align-items: center;
  display: flex;
`;

const AppBar = ({ contentLeft, contentRight, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Control>{contentLeft}</Control>
      <Control>{contentRight}</Control>
    </Wrapper>
  );
};

const { any } = propTypes;

AppBar.propTypes = {
  contentRight: any
};

AppBar.defaultProps = {};

export default AppBar;
