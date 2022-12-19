import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router.js";
import { useLocomotiveScroll } from "react-locomotive-scroll";

// import Link from "next/link";

import SectionTitle from "@/components/Popup/SectionTitle";
import FooterNav from "@/components/FooterNav/index.js";

import { cursorHover } from "recoil/cursorState.js";
import { useSetRecoilState, useResetRecoilState, useRecoilValue } from "recoil";

import { useIsMobile } from "hook";

import { loaderState } from "recoil/loaderState.js";
import { handleEnter } from "./animation.js";
import useOnScreen from "hook";

import {
  Logo,
  HeaderContainer,
  Nav,
  MainLink,
  NavItem,
  NavLink,
  NavElement,
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

  const loaderDisplay = useRecoilValue(loaderState);

  const containerRef = useRef(null);
  const router = useRouter();
  const displayMenu = () => {
    scroll.scroll.stop();
    if (menuDisplay === "hidden") {
      setMenuDisplay("opened");
      document.body.style.overflow = "hidden";
      // scroll.scroll.stop();

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
    if (!isMobile) {
      document.body.style.overflow = "visible";
      setMenuDisplay("hidden");
    }
  }, [isMobile]);

  const subnavSelected = () => {
    document.body.style.overflow = "visible";
    setMenuDisplay("hidden");
    scroll.scroll.start();
  };

  const cursorRotation = () => {
    setCursorHover("expand");
  };

  const resetCursorHover = () => {
    setCursorHover("");
  };

  const scrollToWork = () => {
    setMenuDisplay("hidden");
    if (router.pathname === "/") {
      const selectedWork = document.querySelector(".selected-work");
      if (isMobile) {
        document.body.style.overflow = "visible";
        selectedWork.scrollIntoView(true);
      } else {
        scroll.scroll.scrollTo(selectedWork, {
          // offset: -selectedWork.offsetHeight / 2,
        });
      }
    } else {
      router.push("/");
    }
  };

  const onScreen = useOnScreen(containerRef);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal && loaderDisplay) {
      handleEnter({
        el: containerRef,
        display: "header",
        delay: 1.45,
        animText: loaderDisplay,
      });
    }
  }, [reveal]);
  return (
    <HeaderContainer ref={containerRef}>
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
            <MainLink
              onMouseLeave={resetCursor}
              onMouseEnter={() => cursorRotation()}
            >
              <NavLink href="/about">About</NavLink>
            </MainLink>
            <MainLink
              onMouseLeave={resetCursor}
              onMouseEnter={() => cursorRotation()}
              onClick={() => scrollToWork()}
            >
              <NavElement>Work</NavElement>
            </MainLink>
            <MainLink
              onMouseLeave={resetCursor}
              onMouseEnter={() => cursorRotation()}
            >
              <NavLink href="/contact">Contact</NavLink>
            </MainLink>
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
            <MainLink onClick={() => subnavSelected()}>
              <NavLink href="/about">About</NavLink>
            </MainLink>
            {/* <MainLink onClick={() => scrollToWork()}> */}
            <MainLink onClick={() => scrollToWork()}>Work</MainLink>
            <MainLink onClick={() => subnavSelected()}>
              <NavLink href="/contact">Contact</NavLink>
            </MainLink>
          </ItemsContainer>
          <FooterNav />
        </SubNavItemsContainer>
      </SubNav>
    </HeaderContainer>
  );
};

export default Header;
