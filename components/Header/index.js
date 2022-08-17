import React, { useState } from "react";

import { Logo, Nav, MainLink, NavItem } from "./style.js";
const Header = () => {
  return (
    <Nav>
      <MainLink href="/">Soliman Al Halaby</MainLink>
      <MainLink href="/">
        <Logo src="/Logo.svg"></Logo>
      </MainLink>
      <NavItem>
        <MainLink href="/">About</MainLink>
        <MainLink href="/">Work</MainLink>
        <MainLink href="/">Contact</MainLink>
      </NavItem>
    </Nav>
  );
};

export default Header;
