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
  ContentContainer,
} from "./style.js";

const ContentTwoColumns = ({
  number,
  title,
  subtitle,
  text1,
  text2,
  label,
}) => {
  return (
    <Wrapper data-scroll-section>
      <Container>
        <Number>{number} /</Number>
        <SubContainer>
          <Title>
            {title}
            <Pin top="1.5" left="15" label={label} />
          </Title>
          <ContentWrapper>
            <SubTitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <ContentContainer>
              <Content dangerouslySetInnerHTML={{ __html: text1 }} />
              <Content dangerouslySetInnerHTML={{ __html: text2 }} />
            </ContentContainer>
          </ContentWrapper>
        </SubContainer>
      </Container>
    </Wrapper>
  );
};

export default ContentTwoColumns;
