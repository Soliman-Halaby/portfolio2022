import React, { useState, useRef, useEffect } from "react";
import Image from "next/image.js";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import TitleSection from "@/components/Popup/SectionTitle";
import Pin from "@/components/Popup/Pin";

import Icon from "utils/Icon.js";

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
  ImageContainer,
  TextContainer,
  TextWrapper,
  TextContent,
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
  const imageBlockRef = useRef(null);
  const imageRef = useRef(null);
  const isMobile = useIsMobile();
  const onScreenTitle = useOnScreen(titleRef);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreenTitle) setReveal(onScreenTitle);
  }, [onScreenTitle]);

  const scrollToBottom = () => {
    if (isMobile) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      scroll.scroll.scrollTo(document.body.scrollHeight, {});
    }
  };

  useEffect(() => {
    if (reveal) {
      handleEnter({
        text: titleRef,
        display: "text",
        animText: loaderDisplay,
        delay: 0.85,
      });
      handleEnter({
        text: sectionTitleRef,
        display: "text",
        animText: loaderDisplay,
        delay: 1.65,
      });
      handleEnter({
        text: subtitleRef,
        display: "text",
        animText: loaderDisplay,
        delay: 0.85,
      });
      handleEnter({
        el: pinRef,
        display: "tag",
        delay: 1.7,
        animText: loaderDisplay,
      });
      handleEnter({
        el: imageBlockRef,
        image: imageRef,
        display: "image",
        delay: 0.09,
        animText: loaderDisplay,
      });
    }
  }, [reveal]);

  const scrollToWork = () => {
    const selectedWork = document.querySelector(".selected-work");
    if (isMobile) {
      document.body.style.overflow = "visible";
      selectedWork.scrollIntoView(true);
    } else {
      scroll.scroll.scrollTo(selectedWork, {
        offset: 0,
      });
    }
  };
  return (
    <Wrapper data-scroll-section>
      <TitleSection
        ref={sectionTitleRef}
        // ref2={sectionNumberRef}
        top={isMobile ? "18" : "25"}
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
        <Pin
          ref={pinRef}
          top="50"
          left="90"
          action={scrollToBottom}
          label={label}
        />
        <TextContainer onClick={() => scrollToWork()}>
          <TextWrapper>
            <TextContent>
              Scroll <Icon size={12} icon="bottom-arrow-16" />
            </TextContent>
          </TextWrapper>
          <TextWrapper>
            <TextContent>
              Scroll <Icon size={12} icon="bottom-arrow-16" />
            </TextContent>
          </TextWrapper>
        </TextContainer>
        <ImageWrapper ref={imageBlockRef} className="image-wrapper">
          <ImageContainer ref={imageRef}>
            <BlockImage
              data-scroll
              data-scroll-speed="-2"
              layout="fill"
              placeholder="blur"
              src={image}
              alt="Hero Section Image"
            />
          </ImageContainer>
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
