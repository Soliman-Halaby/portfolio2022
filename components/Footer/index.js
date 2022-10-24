import React, { useState, useRef } from "react";
// import Image from "next/image";

import TitleSection from "@/components/Popup/SectionTitle";
import Button from "@/components/Buttons/Button";
import CircularButton from "@/components/Buttons/CircularButton";
import Pin from "@/components/Popup/Pin";

import useIsMobile from "hook";

import {
  Wrapper,
  Titlee,
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
        <Titlee>Soliman Al Halaby</Titlee>
        <Pin
          top={isMobile ? "60" : "50"}
          left={isMobile ? "10" : "50"}
          label="hire me"
        />
      </TitleContainer>
      <TitleSection number="01" title="Contact"></TitleSection>
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
