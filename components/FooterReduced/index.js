import React, { useState, useRef, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import Button from "@/components/Buttons/Button";
import CircularButton from "@/components/Buttons/CircularButton";
import Pin from "@/components/Popup/Pin";

import { useSetRecoilState, useResetRecoilState } from "recoil";
import { cursorHover } from "recoil/cursorState.js";

import { useIsMobile } from "hook";
import useOnScreen from "hook";
import { handleEnter } from "./animation.js";
import { Wrapper, Nav, NavElement, Text, Element, Image } from "./style.js";

const Footer = ({}) => {
  const [activeMessage, setActiveMessage] = useState(false);
  const isMobile = useIsMobile();

  const navRef = useRef(null);
  const scroll = useLocomotiveScroll();

  const onScreen = useOnScreen(navRef);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        el: navRef,
        display: "footer",
        delay: 0.45,
      });
    }
  }, [reveal]);
  useEffect(() => {
    // console.log(scroll);
  }, [scroll]);

  const copyToClipboard = (_) => {
    setActiveMessage(true);
    navigator.clipboard.writeText("contact@solimanalhalaby.fr");
    setTimeout(() => {
      setActiveMessage(false);
    }, 1500);
  };

  const scrollToTop = (scroll) => {
    if (typeof window === "object") {
      scroll.scroll.scrollTo(0, {
        duration: 1000,
      });
    }
  };

  const socials = [
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/soliman-al-halaby",
      target: "_blank",
    },
    {
      label: "Github",
      link: "https://github.com/Soliman-Halaby",
      target: "_blank",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/SolimanHalaby",
      target: "_blank",
    },
  ];

  const setCursorHover = useSetRecoilState(cursorHover);
  const resetCursor = useResetRecoilState(cursorHover);

  const cursorRotation = () => {
    setCursorHover("expand");
  };

  return (
    <Wrapper data-scroll-section>
      <Nav ref={navRef}>
        <NavElement>
          <Element className="with-arrow">
            <Text>
              Soliman Al Halaby©
              <br />
              All rights reserved
            </Text>
            {isMobile && (
              <svg
                width={24}
                height={24}
                fill="none"
                className="desktop-hide"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => scrollToTop(scroll)}
              >
                <path
                  d="M12 0c0 6.279-5.373 11.368-12 11.368M12 0c0 6.279 5.373 11.368 12 11.368M12 0v24"
                  stroke="#1E1E1E"
                />
              </svg>
            )}
          </Element>
        </NavElement>
        <NavElement>
          <Element>
            <Text>Designed by</Text>
            <Button
              rounded
              target="_blank"
              to="https://www.linkedin.com/in/in%C3%A8srichard/"
              label="ines richard"
            />
          </Element>
        </NavElement>
        <NavElement>
          <Element onClick={copyToClipboard}>
            <Text>Contact</Text>
            <Button label="contact@solimanalhalaby.fr" />
            {activeMessage && (
              <Pin top="-1.5" left="15" colored label="copied"></Pin>
            )}
          </Element>
          <Element>
            <Text>Find me on</Text>
            {socials.map((data, i) => (
              <Button
                to={data.link}
                key={i}
                target={data.target}
                index={i + 1}
                label={data.label}
              />
            ))}
          </Element>
          <Element>
            <Text>
              Download
              <br />
              my resume
            </Text>
            <CircularButton
              to="/CV-Soliman-Al-Halaby.pdf"
              target="_blank"
              label="CV"
            />
          </Element>
        </NavElement>
        {!isMobile && (
          <NavElement>
            <Image
              onMouseEnter={() => cursorRotation()}
              onMouseLeave={resetCursor}
              onClick={() => scrollToTop(scroll)}
              src="/arrow-up.svg"
              alt="Arrow up"
            />
          </NavElement>
        )}
      </Nav>
    </Wrapper>
  );
};

export default Footer;
