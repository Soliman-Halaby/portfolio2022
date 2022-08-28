import React, { useState, useRef } from "react";
// import Image from "next/image";

import TitleSection from "@/components/SectionTitle";
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
  TextContainer,
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
      <Title>Soliman Al Halaby</Title>
      <TitleSection number="01" title="Contact"></TitleSection>
      <Container>
        <SubContainer>
          <FooterNav>
            <Text>Feel free to contact me !</Text>
            <RowContainer>
              <Content>Contact</Content>
              <ButtonContainer onClick={copyToClipboard}>
                <Button label="contact@solimanalhalaby.fr" />
                {activeMessage && <Pin label="Copied"></Pin>}
              </ButtonContainer>
            </RowContainer>
            <RowContainer>
              <Content>Find me on</Content>
              <ButtonContainer>
                <Button label="linkedin" rounded />
                <Button label="github" yellow />
                <Button label="twitter" rounded />
              </ButtonContainer>
            </RowContainer>
            <RowContainer>
              <Content>Download my resume</Content>
              <ButtonContainer>
                <CircularButton label="CV" />
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
