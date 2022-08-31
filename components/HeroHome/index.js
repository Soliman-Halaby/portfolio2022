import React, { useState, useRef } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";

import { Wrapper, Container, Title, TitleContainer, Image } from "./style.js";

const HeroHome = ({ label }) => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Wrapper>
      <TitleSection
        className="hero_title-section"
        number="02"
        title={`Based in paris, 
from cairo`}
      />
      <Container>
        <Title>
          Soliman Al Halaby,
          <br />
          creative developer
        </Title>
        <Title alignRight>
          Looking for an
          <br />
          internship
          <Pin
            top="30"
            left="90"
            action={scrollToBottom}
            className="hero_pin-section"
            label={label}
          />
        </Title>
        <Image src="/home-hero-image.png"></Image>
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
