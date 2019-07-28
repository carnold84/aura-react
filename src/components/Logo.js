import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  display: flex;
  height: ${props => props.height};
  flex-direction: column;
  width: ${props => props.width};
`;

const Logo = ({ height, width, ...rest }) => {
  return (
    <Wrapper height={height} src={"img/logo.png"} width={width} {...rest} />
  );
};

const { string } = propTypes;

Logo.propTypes = {
  height: string,
  width: string
};

Logo.defaultProps = {
  height: "40px"
};

export default Logo;
