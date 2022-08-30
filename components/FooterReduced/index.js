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
          <Button rounded to="/cc" label="ines richard" />
        </NavElement>
        <NavElement onClick={copyToClipboard}>
          <Element>
            <Text>Contact</Text>
            <Button label="contact@solimanalhalaby.fr" />
            {activeMessage && <Pin label="copied"></Pin>}
          </Element>
          <Element>
            <Text>Find me on</Text>
            <Button
              rounded
              // to="https://linkedin.com/in/solimanalhalaby"
              label="linkedin"
            />
            <Button
              colored
              // to="https://linkedin.com/in/solimanalhalaby"
              label="github"
            />
            <Button
              rounded
              // to="https://linkedin.com/in/solimanalhalaby"
              label="twitter"
            />
          </Element>
          <Element>
            <Text>
              Download my
              <br />
              resume
            </Text>
            <CircularButton label="CV" />
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
