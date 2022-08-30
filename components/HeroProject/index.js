import React, { useState, useRef } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";
import Tag from "@/components/Popup/Tag";
import Button from "@/components/Buttons/Button"
import { Wrapper, Container, Title, TitleContainer, Image, TagWrapper, Text, Content} from "./style.js";

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
        <TagWrapper>
        </TagWrapper>
        <Image src="/moviereact-image.png"></Image>
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
