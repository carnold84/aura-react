import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  align-content: center;
  background-color: ${props => props.theme.button.bgColor};
  border: ${props => props.theme.button.borderColor} solid 1px;
  border-radius: 3px;
  color: ${props => props.theme.button.color};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  height: 40px;
  justify-content: center;
  outline: transparent solid 2px;
  padding: 0 15px;
  transition: all 300ms ease-in-out;

  &:disabled {
    pointer-events: none;
  }

  &:focus {
    background-color: ${props => props.theme.button._focus.bgColor};
    border-color: ${props => props.theme.button._focus.borderColor};
    color: ${props => props.theme.button._focus.color};
    box-shadow: 0 0 0 2px ${props => props.theme.button._focus.outlineColor};
  }

  &:hover {
    background-color: ${props => props.theme.button._hover.bgColor};
    border-color: ${props => props.theme.button._hover.borderColor};
    color: ${props => props.theme.button._hover.color};
  }

  &.is-primary {
    background-color: ${props => props.theme.button._primary.bgColor};
    border-color: ${props => props.theme.button._primary.borderColor};
    color: ${props => props.theme.button._primary.color};

    &:hover {
      background-color: ${props => props.theme.button._primary._hover.bgColor};
      border-color: ${props => props.theme.button._primary._hover.borderColor};
      color: ${props => props.theme.button._primary._hover.color};
    }
  }
`;

const Button = ({ children, disabled, isPrimary, type, ...rest }) => {
  console.log(isPrimary);
  return (
    <Wrapper
      className={isPrimary ? "is-primary" : null}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

const { bool, string } = propTypes;

Button.propTypes = {
  disabled: bool,
  isPrimary: bool,
  type: string
};

Button.defaultProps = {
  disabled: false,
  isPrimary: false
};

export default Button;
