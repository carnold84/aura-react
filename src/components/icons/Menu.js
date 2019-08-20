import React from "react";

import SvgIcon from "../SvgIcon";

const MenuIcon = props => {
  return (
    <SvgIcon {...props}>
      <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </SvgIcon>
  );
};

export default MenuIcon;
