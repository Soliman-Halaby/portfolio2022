import React, { useState, useRef, useEffect } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";
import gsap from "gsap";

import { Wrapper, Container, Title, TitleContainer, Image, Text } from "./style.js";

const HeroHome = ({ title, subtitle, sectionTitle,label, image }) => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };


  return (
    <Wrapper data-scroll-section>
      <TitleSection
        className="hero_title-section"
        number="02"
        title={sectionTitle}
      />
      <Container>
        <Title>
          {title}
        </Title>
        <Title alignRight>
          {subtitle}
          <Pin
            top="30"
            left="90"
            action={scrollToBottom}
            className="hero_pin-section"
            label={label}
          />
        </Title>
        <Text>
          Scroll
          <svg
            width={12}
            height={12}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12c0-3.14 2.686-5.684 6-5.684M6 12c0-3.14-2.686-5.684-6-5.684M6 12V0"
              stroke="#1E1E1E"
            />
          </svg>
        </Text>
            <Image           
              src={image}
              alt='Image alt'
            />
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
