import React, { useState, useEffect } from "react";

// import Link from "next/link";

import useIsMobile from "hook";

import SectionTitle from "@/components/Popup/SectionTitle";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import {
  Logo,
  HeaderContainer,
  Nav,
  MainLink,
  NavItem,
  NavLink,
  MenuDisplay,
  SubNav,
  SubNavItemsContainer,
  ItemsContainer,
} from "./style.js";

import FooterNav from "@/components/FooterNav/index.js";
const Header = () => {
  const isMobile = useIsMobile();
  const [menuDisplay, setMenuDisplay] = useState("hidden");
  const scroll = useLocomotiveScroll();
  const displayMenu = () => {
    console.log("menu");
    console.log(scroll.scroll);
    scroll.scroll.stop();
    if (menuDisplay === "hidden") {
      setMenuDisplay("opened");
      scroll.scroll.stop();
    }

    if (menuDisplay === "opened") {
      setMenuDisplay("hidden");
      scroll.scroll.start();
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setMenuDisplay("hidden");
    }
  }, [isMobile]);
  return (
    <HeaderContainer>
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
            <MainLink onClick={() => displayMenu()}>Menu</MainLink>
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
      <SubNav className={`${menuDisplay}`}>
        <SubNavItemsContainer>
          <ItemsContainer>
            <SectionTitle number="01" title="Contact"></SectionTitle>
            <MainLink>Home</MainLink>
            <MainLink>About</MainLink>
            <MainLink>Work</MainLink>
            <MainLink>Contact</MainLink>
          </ItemsContainer>
          <FooterNav />
        </SubNavItemsContainer>
      </SubNav>
    </HeaderContainer>
  );
};

export default Header;
