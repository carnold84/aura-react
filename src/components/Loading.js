import propTypes from "prop-types";
import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
      transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
  }
  50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
  }
  100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
  }
`;

const Container = styled.div`
  width: ${props => props.diameter};
  height: ${props => props.diameter};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${props => props.diameter};
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Circle = styled.svg`
  animation: ${rotate} 2s linear infinite;
  bottom: 0;
  height: ${props => props.diameter};
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  stroke: #000000;
  top: 0;
  transform-origin: center center;
  width: ${props => props.diameter};
`;

const Path = styled.circle`
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke: ${props => props.theme.loading.default.bgColor};
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: 3px;

  .is-alternate & {
    stroke: ${props => props.theme.loading.alternate.bgColor};
  }
`;

const Loading = ({ diameter, isAlternate }) => {
  return (
    <Container
      className={isAlternate ? "is-alternate" : null}
      diameter={diameter}
    >
      <Loader diameter={diameter}>
        <Circle diameter={diameter} viewBox="25 25 50 50">
          <Path
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke-width="3"
            stroke-miterlimit="10"
          />
        </Circle>
      </Loader>
    </Container>
  );
};

const { bool, string } = propTypes;

Loading.propTypes = {
  diameter: string,
  isAlternate: bool
};

Loading.defaultProps = {
  diameter: "30px",
  isAlternate: false
};

export default Loading;
