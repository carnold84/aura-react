import styled from "styled-components";

const MenuItem = styled.li`
  margin: 0;

  &:last-child {
    margin: 0;
  }

  a,
  a:link,
  a:visited {
    align-items: center;
    color: ${props => props.theme.appBar.menu.menuItem.color};
    display: flex;
    height: 100%;
    padding: 0 20px;
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
