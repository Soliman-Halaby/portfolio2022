import React, { useState, useRef } from "react";
// import Image from "next/image";

import TitleSection from "@/components/Popup/SectionTitle";
import Button from "@/components/Buttons/Button";
import CircularButton from "@/components/Buttons/CircularButton";
import Pin from "@/components/Popup/Pin";

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

  const copyToClipboard = (_) => {
    setActiveMessage(true);
    navigator.clipboard.writeText("contact@solimanalhalaby.fr");
    setTimeout(() => {
      setActiveMessage(false);
    }, 1500);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Soliman Al Halaby</Title>
        <Pin label="hire me" />
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
                {activeMessage && <Pin colored label="Copied"></Pin>}
              </ButtonContainer>
            </RowContainer>
            <RowContainer>
              <Content>Find me on</Content>
              <ButtonContainer>
                <Button to="socials" label="linkedin" rounded />
                <Button to="socials" label="github" colored />
                <Button to="socials" label="twitter" rounded />
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
