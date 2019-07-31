import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  border-radius: 15px;
  display: flex;
  height: 30px;
  justify-content: center;
  overflow: hidden;
  width: 30px;
`;

const Avatar = ({ altText, imageUrl, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <img alt={altText} src={imageUrl} />
    </Wrapper>
  );
};

const { string } = propTypes;

Avatar.propTypes = {
  altText: string,
  imageUrl: string
};

Avatar.defaultProps = {};

export default Avatar;
