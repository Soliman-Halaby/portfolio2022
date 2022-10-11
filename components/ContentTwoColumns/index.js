import React, { useState, useRef } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";
import Tag from "@/components/Popup/Tag";
import Button from "@/components/Buttons/Button";

import {
  Wrapper,
  Number,
  Container,
  Title,
  SubContainer,
  ContentWrapper,
  SubTitle,
  Content,
} from "./style.js";

const ContentTwoColumns = ({ title, subtitle, text1, text2, label }) => {
  return (
    <Wrapper data-scroll-section>
      <Container>
        <Number>01/</Number>
        <SubContainer>
          <Title>
            {title}
            <Pin colored top="45" left="15" label={label} />
          </Title>
          <ContentWrapper>
            <SubTitle>{subtitle}</SubTitle>
            <Content>{text1}</Content>
            <Content>{text2}</Content>
          </ContentWrapper>
        </SubContainer>
      </Container>
    </Wrapper>
  );
};

export default ContentTwoColumns;
