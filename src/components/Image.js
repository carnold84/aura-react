import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Img = styled.div`
  background: 1px solid ${props => props.theme.image.bgColor};
  background-image: url(${props => props.imageUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: ${props => props.theme.image.borderColor} solid 1px;
  height: ${props => props.height};
  width: ${props => props.width};
`;

const Label = styled.div`
  color: ${props => props.theme.image.label.color};
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0 0;
  text-align: center;
  text-transform: uppercase;
`;

const Image = ({ height, imageUrl, label, width, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Img imageUrl={imageUrl} height={height} width={width} />
      {label && <Label>{label}</Label>}
    </Wrapper>
  );
};

const { string } = propTypes;

Image.propTypes = {
  height: string,
  imageUrl: string,
  width: string
};

Image.defaultProps = {
  height: "200px",
  width: "100%"
};

export default Image;
