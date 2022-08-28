import React, { useState, useRef } from "react";
// import Image from "next/image";

import TitleSection from "@/components/SectionTitle";

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
  SuccessMessage,
  Button,
  CircularButton,
} from "./style.js";

const Footer = () => {
  const [activeMessage, setActiveMessage] = useState(false);

  const copyToClipboard = (e) => {
    setActiveMessage(true);
    navigator.clipboard.writeText(e.currentTarget.innerText.toLowerCase());
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
              <ButtonContainer>
                <Button onClick={copyToClipboard}>
                  Contact@solimanalhalaby.com
                </Button>
                {activeMessage && <SuccessMessage>Copied</SuccessMessage>}
              </ButtonContainer>
            </RowContainer>
            <RowContainer>
              <Content>Find me on</Content>
              <ButtonContainer>
                <Button rounded>Linkedin</Button>
                <Button rounded>Github</Button>
                <Button rounded>Twitter</Button>
              </ButtonContainer>
            </RowContainer>
            <RowContainer>
              <Content>Download my resume</Content>
              <ButtonContainer>
                <CircularButton>CV</CircularButton>
              </ButtonContainer>
            </RowContainer>
          </FooterNav>
        </SubContainer>
        <SubContainer>
          <Image src="/contact-image.png"></Image>
        </SubContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
