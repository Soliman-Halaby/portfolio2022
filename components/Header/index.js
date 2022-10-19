import React, { useState } from "react";

// import Link from "next/link";

import useIsMobile from "hook";

import { Logo, Nav, MainLink, NavItem, NavLink } from "./style.js";
const Header = () => {
  const isMobile = useIsMobile();
  return (
    <Nav>
      <MainLink noAnim>
        {!isMobile ? (
          <NavLink noAnim href="/">
            Soliman Al Halaby
          </NavLink>
        ) : (
          <NavLink noAnim href="/">
            S. Al Halaby
          </NavLink>
        )}
      </MainLink>
      <NavLink href="/">
        <Logo src="/Logo.svg"></Logo>
      </NavLink>
      {isMobile ? (
        <NavItem>
          <MainLink>
            <NavLink href="/">Menu</NavLink>
          </MainLink>
        </NavItem>
      ) : (
        <NavItem>
          <MainLink>
            <NavLink href="/">About</NavLink>
          </MainLink>
          <MainLink>
            <NavLink href="/about">Work</NavLink>
          </MainLink>
          <MainLink>
            <NavLink href="/contact">Contact</NavLink>
          </MainLink>
        </NavItem>
      )}
    </Nav>
  );
};

export default Header;
