import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  align-content: center;
  background-color: ${props => props.theme.iconButton.bgColor};
  border-color: ${props => props.theme.iconButton.borderColor};
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  fill: ${props => props.theme.iconButton.color};
  cursor: pointer;
  display: flex;
  height: ${props => props.height};
  justify-content: center;
  outline: transparent solid 2px;
  padding: 0;
  transition: all 300ms ease-in-out;
  width: ${props => props.width};

  &:disabled {
    pointer-events: none;
  }

  &:focus {
    background-color: ${props => props.theme.iconButton._focus.bgColor};
    border-color: ${props => props.theme.iconButton._focus.borderColor};
    fill: ${props => props.theme.iconButton._focus.color};
    box-shadow: 0 0 0 2px ${props => props.theme.iconButton._focus.outlineColor};
  }

  &:hover {
    background-color: ${props => props.theme.iconButton._hover.bgColor};
    border-color: ${props => props.theme.iconButton._hover.borderColor};
    fill: ${props => props.theme.iconButton._hover.color};
  }
`;

const IconButton = ({ children, disabled, height, type, width, ...rest }) => {
  return (
    <Wrapper
      disabled={disabled}
      height={height}
      type={type}
      width={width}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

const { bool, string } = propTypes;

IconButton.propTypes = {
  disabled: bool,
  height: string,
  type: string,
  width: string
};

IconButton.defaultProps = {
  disabled: false,
  height: "40px",
  width: "40px"
};

export default IconButton;
