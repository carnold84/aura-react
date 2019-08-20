import propTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";
import useComponentSize from "@rehooks/component-size";

import { device } from "../utils/device";

const Wrapper = styled.div`
  background-color: ${props => props.theme.section.bgColor};
  border-bottom: 1px solid ${props => props.theme.section.borderColor};
  border-top: 1px solid ${props => props.theme.section.borderColor};
  display: flex;
  flex-direction: column;
  padding: 30px 0 0;

  @media ${device.mobileL} {
    border: 1px solid ${props => props.theme.section.borderColor};
  }
`;

const Container = styled.div`
  display: flex;
  overflow: auto;
  padding: 0;
`;

const Content = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-auto-flow: column;
  padding: 0 30px 30px;
  min-width: 900px;
  width: 100%;
`;

const Label = styled.div`
  color: ${props => props.theme.section.label.color};
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 15px 30px;
  text-transform: uppercase;
`;

const Section = ({ children, label, ...rest }) => {
  const ref = useRef(null);
  const size = useComponentSize(ref);
  const { width } = size;

  let gridColumns = "1fr 1fr 1fr";

  if (width > 1000) {
    gridColumns = "1fr 1fr 1fr 1fr";
  }

  if (width > 1400) {
    gridColumns = "1fr 1fr 1fr 1fr 1fr";
  }

  return (
    <Wrapper ref={ref} {...rest}>
      <Label>{label}</Label>
      <Container>
        <Content style={{ gridTemplateColumns: gridColumns }}>
          {children}
        </Content>
      </Container>
    </Wrapper>
  );
};

const { any, string } = propTypes;

Section.propTypes = {
  children: any,
  label: string
};

export default Section;
