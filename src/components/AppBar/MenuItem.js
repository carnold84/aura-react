import styled from "styled-components";

const MenuItem = styled.li`
  margin: 0 0 0 10px;

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
