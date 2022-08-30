import React, { useState } from "react";

import Link from 'next/link'

import { Logo, Nav, MainLink, NavItem } from "./style.js";
const Header = () => {
  return (
    <Nav>
      <MainLink><Link href="/">Soliman Al Halaby</Link></MainLink>
      <Link href="/">
        <Logo src="/Logo.svg"></Logo>
      </Link>
      <NavItem>
        <MainLink><Link href="/">About</Link></MainLink>
        <MainLink><Link href="/projet">Work</Link></MainLink>
        <MainLink><Link href="/contact">Contact</Link></MainLink>
      </NavItem>
    </Nav>
  );
};

export default Header;
