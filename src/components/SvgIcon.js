import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
  fill: inherit;
  height: ${props => props.height};
  width: ${props => props.width};
`;

const SvgIcon = ({ children, height, width, ...rest }) => {
  return (
    <Wrapper
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

const { string } = propTypes;

SvgIcon.propTypes = {
  height: string,
  width: string
};

SvgIcon.defaultProps = {
  height: "24px",
  width: "24px"
};

export default SvgIcon;
