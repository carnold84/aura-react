import React from "react";
import styled from "styled-components";

import { device } from "../utils/device";

import Image from "../components/Image";
import Section from "../components/Section";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;

  @media ${device.mobileL} {
    padding: 20px;
  }

  @media ${device.tablet} {
    padding: 50px;
  }
`;

const HomeSection = styled(Section)`
  margin: 0 0 20px;
`;

const HomeView = () => {
  return (
    <Wrapper>
      <HomeSection label={"Pinned"}>
        <Image imageUrl={"img/demo/image1.jpg"} label={"My First Project"} />
        <Image imageUrl={"img/demo/image1.jpg"} label={"My First Project"} />
        <Image imageUrl={"img/demo/image1.jpg"} label={"My First Project"} />
      </HomeSection>

      <HomeSection label={"Recent Projects"}>
        <Image imageUrl={"img/demo/image1.jpg"} label={"My First Project"} />
        <Image imageUrl={"img/demo/image1.jpg"} label={"My First Project"} />
        <Image imageUrl={"img/demo/image1.jpg"} label={"My First Project"} />
      </HomeSection>
    </Wrapper>
  );
};

export default HomeView;
