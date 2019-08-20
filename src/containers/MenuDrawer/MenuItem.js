import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Wrapper = styled.li`
  padding: 10px 20px;
  transform: translate3d(0, 0, 0);
  transition: transform 500ms ease-out;
  width: 100%;

  a,
  a:link,
  a:visited {
    color: #333333;
    font-size: 1.7rem;
    text-decoration: none;
  }
`;

const MenuItem = ({ children, onClose, to, ...rest }) => {
  return (
    <Wrapper onClick={onClose} {...rest}>
      <Link
        getProps={({ isCurrent }) => {
          return {
            className: isCurrent ? "is-current" : null
          };
        }}
        to={to}
      >
        {children}
      </Link>
    </Wrapper>
  );
};

export default MenuItem;
