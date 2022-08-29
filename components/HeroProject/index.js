import React, { useState, useRef } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";

import { Wrapper, Container, Title, TitleContainer, Image } from "./style.js";

const HeroHome = ({}) => {

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <Wrapper>
      <Container>
        <Title>
          MovieReact
          <br />
          website
        </Title>
        <Image src="/moviereact-image.png"></Image>
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
