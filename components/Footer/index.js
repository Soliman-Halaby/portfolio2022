import React, { useState, useRef } from "react";
// import Image from "next/image";

import TitleSection from "@/components/Popup/SectionTitle";
import Button from "@/components/Buttons/Button";
import CircularButton from "@/components/Buttons/CircularButton";
import Pin from "@/components/Popup/Pin";

import useIsMobile from "hook";

import {
  Wrapper,
  Title,
  Container,
  Image,
  SubContainer,
  FooterNav,
  Text,
  Content,
  RowContainer,
  TitleContainer,
  ButtonContainer,
} from "./style.js";

const Footer = () => {
  const [activeMessage, setActiveMessage] = useState(false);

  const isMobile = useIsMobile();

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
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/soliman-al-halaby/",
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/soliman-al-halaby/",
    },
  ];

  return (
    <Wrapper data-scroll-section>
      <TitleContainer>
        <Title>Soliman Al Halaby</Title>
        <Pin
          top={isMobile ? "14.5" : "13"}
          left={isMobile ? "10" : "75"}
          label="get in touch"
        />
      </TitleContainer>
      <TitleSection top="23" left="20" number="01" title="Contact" />
      <Container>
        <SubContainer>
          <FooterNav>
            <Text>Feel free to contact me !</Text>
            <RowContainer>
              <Content>Contact</Content>
              <ButtonContainer onClick={copyToClipboard}>
                <Button label="contact@solimanalhalaby.fr" />
                {activeMessage && (
                  <Pin top="0" left="45" colored label="Copied"></Pin>
                )}
              </ButtonContainer>
            </RowContainer>
            <RowContainer>
              <Content>Find me on</Content>
              <ButtonContainer>
                {socials.map((data, i) => (
                  <Button to={data.link} key={i} index={i} label={data.label} />
                ))}
              </ButtonContainer>
            </RowContainer>
            <RowContainer>
              <Content>Download my resume</Content>
              <ButtonContainer>
                <CircularButton to="/" label="CV" />
              </ButtonContainer>
            </RowContainer>
          </FooterNav>
        </SubContainer>
        <SubContainer>
          <Image src="/contact-image.png" />
        </SubContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
