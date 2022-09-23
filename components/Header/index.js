import React, { useState } from "react";

import Link from "next/link";


import useIsMobile from 'hook'

import { Logo, Nav, MainLink, NavItem } from "./style.js";
const Header = () => {
  const isMobile = useIsMobile()
  return (
    <Nav>
      <MainLink>
        {!isMobile ? <Link href="/">Soliman Al Halaby</Link> :
        <Link href="/">S. Al Halaby</Link>}
      </MainLink>
      <Link href="/">
        <Logo src="/Logo.svg"></Logo>
      </Link>
      {isMobile ? 
        <NavItem>
          <MainLink>
            <Link href="/">Menu</Link>
          </MainLink>
        </NavItem> 
      :
        <NavItem>
          <MainLink>
            <Link href="/">About</Link>
          </MainLink>
          <MainLink>
            <Link href="/project/moviereact">Work</Link>
          </MainLink>
          <MainLink>
            <Link href="/contact">Contact</Link>
          </MainLink>
        </NavItem>
      }
    </Nav>
  );
};

export default Header;
