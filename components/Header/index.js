import React, { useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

// import Link from "next/link";

import SectionTitle from "@/components/Popup/SectionTitle";
import FooterNav from "@/components/FooterNav/index.js";

import { cursorHover } from "recoil/cursorState.js";
import { useSetRecoilState, useResetRecoilState } from "recoil";

import useIsMobile from "hook";

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

const Header = () => {
  const isMobile = useIsMobile();
  const [menuDisplay, setMenuDisplay] = useState("hidden");
  const scroll = useLocomotiveScroll();
  const setCursorHover = useSetRecoilState(cursorHover);
  const resetCursor = useResetRecoilState(cursorHover);

  const displayMenu = () => {
    // console.log("menu");
    // console.log(scroll.scroll);
    scroll.scroll.stop();
    if (menuDisplay === "hidden") {
      setMenuDisplay("opened");
      document.body.style.overflow = "hidden";
      scroll.scroll.stop();

      if (isMobile) {
        document.body.style.overflow = "hidden";
      }
    }

    if (menuDisplay === "opened") {
      setMenuDisplay("hidden");
      scroll.scroll.start();
      document.body.style.overflow = "visible";
    }
  };

  useEffect(() => {
    document.body.style.overflow = "visible";
  }, []);
  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "visible";
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
      link: "../project/cloudy-bay",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  const subnavSelected = () => {
    console.log("subnav selected");
    document.body.style.overflow = "visible";
  };

  const cursorRotation = () => {
    setCursorHover("expand");
  };

  const resetCursorHover = () => {
    setCursorHover("");
  };

  return (
    <HeaderContainer>
      <Nav>
        <MainLink
          onMouseEnter={() => cursorRotation()}
          onMouseLeave={resetCursor}
          noAnim
        >
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
          <Logo
            onMouseEnter={() => cursorRotation()}
            onMouseLeave={resetCursor}
            src="/Logo.svg"
          ></Logo>
        </NavLink>
        {isMobile ? (
          <NavItem>
            <MainLink onClick={() => displayMenu()}>Menu</MainLink>
          </NavItem>
        ) : (
          <NavItem>
            {navDatas.map((data, index) => {
              return (
                <MainLink
                  onMouseLeave={resetCursor}
                  onMouseEnter={() => cursorRotation()}
                  key={index}
                >
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
            <MainLink onClick={() => subnavSelected()}>
              <NavLink href="/">Home</NavLink>
            </MainLink>
            {navDatas.map((data, index) => {
              return (
                <MainLink onClick={() => subnavSelected()} key={index}>
                  <NavLink href={data.link}>{data.label}</NavLink>
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
