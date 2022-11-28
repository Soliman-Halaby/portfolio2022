import React, { useState, useRef, useEffect } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";
import Tag from "@/components/Popup/Tag";
import Button from "@/components/Buttons/Button";

import useOnScreen from "hook/index.js";
import { handleEnter } from "./animation.js";

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
  const titleRef = useRef(null);
  const pinRef = useRef(null);

  const onScreenTitle = useOnScreen(titleRef);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreenTitle) setReveal(onScreenTitle);
  }, [onScreenTitle]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        el: pinRef,
        display: "pin",
        delay: 0.7,
        // animText: loaderDisplay,
      });
    }
  }, [reveal]);

  return (
    <Wrapper data-scroll-section>
      <Container>
        <Number>{number} /</Number>
        <SubContainer>
          <Title ref={titleRef}>
            {title}
            <Pin ref={pinRef} top="1.5" left="15" label={label} />
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
