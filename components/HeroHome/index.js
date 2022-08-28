import React, { useState, useRef } from "react";

import TitleSection from "@/components/SectionTitle";

import { Wrapper, Container, Title } from "./style.js";

const HeroHome = ({}) => {
  return (
    <Wrapper>
      <TitleSection
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
        </Title>
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
