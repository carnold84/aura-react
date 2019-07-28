import _uniqueId from "lodash/uniqueId";
import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  background-color: ${props => props.theme.textInput.input.bgColor};
  border: none;
  border-bottom: ${props => props.theme.textInput.input.borderColor} solid 1px;
  color: ${props => props.theme.textInput.input.color};
  display: flex;
  padding: 5px 0;

  &:focus {
    border-color: ${props => props.theme.textInput.input._focus.borderColor};
    color: ${props => props.theme.textInput.input._focus.color};
    outline: none;
  }
`;

const Label = styled.label`
  color: ${props => props.theme.textInput.label.color};
  font-weight: 700;
  margin: 0 0 5px;
`;

const Error = styled.p`
  color: ${props => props.theme.textInput.errors.color};
  height: 15px;
  margin: 8px 0 20px;
`;

const TextInput = ({
  errors,
  id = _uniqueId(),
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  type,
  value,
  ...rest
}) => {
  console.log(value);
  return (
    <Wrapper {...rest}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        value={value}
      />
      <Error>{errors}</Error>
    </Wrapper>
  );
};

const { func, string } = propTypes;

TextInput.propTypes = {
  errors: string,
  id: string,
  name: string.isRequired,
  label: string,
  onBlur: func,
  onChange: func.isRequired,
  onFocus: func,
  type: string,
  value: string
};

TextInput.defaultProps = {
  errors: "",
  type: "text",
  value: ""
};

export default TextInput;
