import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";

import Button from "@/components/Buttons/Button";
import CircularButton from "@/components/Buttons/CircularButton";

import Pin from "@/components/Popup/Pin";
import {
  Wrapper,
  Nav,
  NavElement,
  RowContainer,
  Text,
  TextContent,
  Element,
  Image,
} from "./style.js";

import { useLocomotiveScroll } from "react-locomotive-scroll";

import { useIsMobile } from "hook";

const Footer = () => {
  const [activeMessage, setActiveMessage] = useState(false);
  const isMobile = useIsMobile();

  const scroll = useLocomotiveScroll();

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
          <Element className="with-arrow">
            <Text>
              Soliman Al Halaby©
              <br />
              All rights reserved
            </Text>
            <Element>
              <RowContainer>
                <Text>Designed by</Text>
                <Button
                  rounded
                  target="_blank"
                  to="https://www.linkedin.com/in/in%C3%A8srichard/"
                  label="ines richard"
                />
              </RowContainer>
            </Element>
          </Element>
        </NavElement>

        <NavElement>
          <Element>
            <TextContent>Feel free to contact me</TextContent>
          </Element>
          <Element onClick={copyToClipboard}>
            <Text>Contact</Text>
            <Button label="contact@solimanalhalaby.fr" />
            {activeMessage && (
              <Pin top="0" left="55" colored label="copied"></Pin>
            )}
          </Element>
          <Element>
            <Text>Find me on</Text>
            <RowContainer>
              {socials.map((data, i) => (
                <Button
                  to={data.link}
                  key={i}
                  target={data.target}
                  index={i + 1}
                  label={data.label}
                />
              ))}
            </RowContainer>
          </Element>
          <Element>
            <Text>
              Download
              <br />
              my resume
            </Text>
            <CircularButton to="/" label="CV" />
          </Element>
        </NavElement>
      </Nav>
    </Wrapper>
  );
};

export default Footer;
