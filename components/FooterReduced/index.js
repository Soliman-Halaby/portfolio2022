import React, { useState, useRef } from "react";
// import Image from "next/image";

import Button from "@/components/Buttons/Button";
import CircularButton from "@/components/Buttons/CircularButton";

import Pin from "@/components/Popup/Pin";
import { Wrapper, Nav, NavElement, Text, Element, Image } from "./style.js";

const Footer = () => {
  const [activeMessage, setActiveMessage] = useState(false);

  const copyToClipboard = (_) => {
    setActiveMessage(true);
    navigator.clipboard.writeText("contact@solimanalhalaby.fr");
    setTimeout(() => {
      setActiveMessage(false);
    }, 1500);
  };

  const scrollToTop = (_) => {
    if (typeof window === "object")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/soliman-al-halaby/",
      target: "_blank",
    },
    {
      label: "Github",
      link: "https://www.linkedin.com/in/soliman-al-halaby/",
      target: "_blank",
    },
    {
      label: "Twitter",
      link: "https://www.linkedin.com/in/soliman-al-halaby/",
      target: "_blank",
    },
  ];
  return (
    <Wrapper>
      <Nav>
        <NavElement>
          <Text>
            Soliman Al Halaby©
            <br />
            All rights reserved
          </Text>
        </NavElement>
        <NavElement>
          <Text>Designed by</Text>
          <Button rounded target='_blank' to='/ines' label="ines richard" />
        </NavElement>
        <NavElement>
          <Element onClick={copyToClipboard}>
            <Text>Contact</Text>
            <Button label="contact@solimanalhalaby.fr" />
            {activeMessage && (
              <Pin top="0" left="55" colored label="copied"></Pin>
            )}
          </Element>
          <Element>
            <Text>Find me on</Text>
            {socials.map((data, i) => (
              <Button to={data.link} key={i} target={data.target} index={i + 1} label={data.label} />
            ))}
          </Element>
          <Element>
            <Text>
              Download my
              <br />
              resume
            </Text>
            <CircularButton to="/" label="CV" />
          </Element>
        </NavElement>
        <NavElement>
          <Image onClick={scrollToTop} src="/arrow-up.svg" />
        </NavElement>
      </Nav>
    </Wrapper>
  );
};

export default Footer;
