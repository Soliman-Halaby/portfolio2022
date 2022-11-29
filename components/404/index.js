import React, { useState, useRef, useEffect } from "react";

import TitleSection from "@/components/Popup/SectionTitle";
import Button from "@/components/Buttons/Button";

import { handleEnter } from "./animation.js";
import useOnScreen from "hook/index.js";

import {
  Wrapper,
  Container,
  TitleWrapper,
  TitleContainer,
  Title,
  Subtitle,
} from "./style.js";

const FourOhFour = ({ title, subtitle, text1, text2, label }) => {
  const titleRef = useRef(null);
  const onScreen = useOnScreen(titleRef);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        text: titleRef,
        display: "title",
      });
    }
  }, [reveal]);
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <TitleWrapper ref={titleRef}>
            <Title>Page</Title>
            <Title>Not</Title>
            <Title>Found</Title>
          </TitleWrapper>
          <Subtitle>404 error</Subtitle>
        </TitleContainer>
        <Button to="/" rounded label="Go back home" />
      </Container>
    </Wrapper>
  );
};

export default FourOhFour;
