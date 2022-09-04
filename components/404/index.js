import React, { useState, useRef } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Button from "@/components/Buttons/Button";

import {
  Wrapper,
  Container,
  LabelContainer,
  Label,
  Content,
  Title,
  Subtitle,
} from "./style.js";

const FourOhFour = ({ title, subtitle, text1, text2, label }) => {
  return (
    <Wrapper>
      <Container>
        <LabelContainer>
          <Label>404</Label>
          <Content>Error</Content>
        </LabelContainer>
        <Title>Looks like you’re lost</Title>
        <Subtitle>
          Sorry, the page you were looking for could not be found.
        </Subtitle>
        <Button to="/" rounded label="Go back home" />
      </Container>
    </Wrapper>
  );
};

export default FourOhFour;
