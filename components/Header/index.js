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
    // console.log("menu");
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

  const navDatas = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Work",
      link: "project/cloudy-Bay",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  const subnavSelected = () => {
    console.log("subnav selected");
  };
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
            {navDatas.map((data, index) => {
              return (
                <MainLink key={index}>
                  <NavLink href={data.link}>{data.label}</NavLink>
                </MainLink>
              );
            })}
          </NavItem>
        )}
      </Nav>
      <SubNav className={`${menuDisplay}`}>
        <SubNavItemsContainer>
          <ItemsContainer>
            <SectionTitle number="01" title="Menu"></SectionTitle>
            <MainLink>
              <NavLink onClick={() => subnavSelected()} href="/">
                Home
              </NavLink>
            </MainLink>
            {navDatas.map((data, index) => {
              return (
                <MainLink key={index}>
                  <NavLink onClick={() => subnavSelected()} href={data.link}>
                    {data.label}
                  </NavLink>
                </MainLink>
              );
            })}
          </ItemsContainer>
          <FooterNav />
        </SubNavItemsContainer>
      </SubNav>
    </HeaderContainer>
  );
};

export default Header;
