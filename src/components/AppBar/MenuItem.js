import styled from "styled-components";

const MenuItem = styled.li`
  height: 100%;
  padding: 0 15px;

  a,
  a:link,
  a:visited {
    color: ${props => props.theme.appBar.menu.menuItem.color};
    text-transform: uppercase;
    text-decoration: none;

    &.is-current {
      color: ${props => props.theme.appBar.menu.menuItem._active.color};
    }

    &:hover {
      color: ${props => props.theme.appBar.menu.menuItem._hover.color};
    }
  }
`;

export default MenuItem;
