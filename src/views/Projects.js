import React from "react";
import styled from "styled-components";

import { device } from "../utils/device";
import AppBar from "../components/AppBar/AppBar";
import Button from "../components/Button";

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

const ProjectsView = () => {
  return (
    <Wrapper>
      <AppBar>
        <Button>New Project</Button>
      </AppBar>
    </Wrapper>
  );
};

export default ProjectsView;
