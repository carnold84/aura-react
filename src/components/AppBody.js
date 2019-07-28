import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AppBody = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const { any } = propTypes;

AppBody.propTypes = {
  children: any
};

AppBody.defaultProps = {};

export default AppBody;
