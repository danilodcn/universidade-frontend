import { Container, Toolbar } from "@mui/material";
import React from "react";

import { HeaderAppBar, HeaderLogo, HeaderText } from "./Header.style";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div>
      <HeaderAppBar>
        <Toolbar component={Container}>
          <HeaderLogo src={"logo/universidade.png"} alt={"Daconnas - Online"} />
          <HeaderText> {props.title} </HeaderText>
        </Toolbar>
      </HeaderAppBar>
    </div>
  );
};

export default Header;
