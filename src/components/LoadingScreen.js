import React from "react";
import styled from "styled-components";

import Loading from "./Loading";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const LoadingScreen = () => {
  return (
    <Wrapper>
      <Loading />
    </Wrapper>
  );
};

export default LoadingScreen;
