import React, { useState, useRef, useEffect } from "react";
import Image from "next/image.js";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import TitleSection from "@/components/Popup/SectionTitle";
import Pin from "@/components/Popup/Pin";

import { useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";

import useOnScreen from "hook/index.js";
import { handleEnter } from "./animation.js";

import { useIsMobile } from "hook/index.js";

import {
  Wrapper,
  Container,
  Title,
  TitleContainer,
  BlockImage,
  ImageWrapper,
  Text,
} from "./style.js";

const HeroHome = ({ title, subtitle, sectionTitle, label, image }) => {
  const { scroll } = useLocomotiveScroll();
  const loaderDisplay = useRecoilValue(loaderState);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const sectionNumberRef = useRef(null);
  const pinRef = useRef(null);

  const isMobile = useIsMobile();
  const onScreenTitle = useOnScreen(titleRef);
  const [reveal, setReveal] = useState(false);

  console.log(sectionNumberRef);
  useEffect(() => {
    if (onScreenTitle) setReveal(onScreenTitle);
  }, [onScreenTitle]);

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    if (reveal) {
      handleEnter({
        text: titleRef,
        display: "text",
        animText: loaderDisplay,
      });
      handleEnter({
        text: sectionTitleRef,
        display: "text",
        animText: loaderDisplay,
      });
      handleEnter({
        text: subtitleRef,
        display: "text",
        animText: loaderDisplay,
      });
      handleEnter({
        el: pinRef,
        display: "tag",
        delay: 0.7,
        // animText: loaderDisplay,
      });
    }
  }, [reveal]);

  return (
    <Wrapper data-scroll-section>
      <TitleSection
        ref={sectionTitleRef}
        ref2={sectionNumberRef}
        top={isMobile ? "11.5" : "25"}
        number="01"
        title={sectionTitle}
      />
      <Container>
        <Title
          data-scroll
          data-scroll-repeat
          // data-scroll
          // data-scroll-speed="3"
          ref={titleRef}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Title
          data-scroll
          data-scroll-repeat
          alignRight
          dangerouslySetInnerHTML={{ __html: subtitle }}
          ref={subtitleRef}
        />
        {/* {subtitle} */}
        <Pin
          ref={pinRef}
          top="30"
          left="90"
          action={scrollToBottom}
          // className="hero_pin-section"
          label={label}
        />
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
        <ImageWrapper className="image-wrapper">
          <BlockImage
            data-scroll
            data-scroll-speed="-2"
            layout="responsive"
            placeholder="blur"
            width={"100%"}
            height={"90vh"}
            src={image}
            alt="Img"
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
