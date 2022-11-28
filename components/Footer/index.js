import React, { useState, useRef, useEffect } from "react";

import TitleSection from "@/components/Popup/SectionTitle";
import Button from "@/components/Buttons/Button";
import CircularButton from "@/components/Buttons/CircularButton";
import Pin from "@/components/Popup/Pin";

import { useIsMobile } from "hook";
import useOnScreen from "hook/index.js";
import { handleEnter } from "./animation.js";

import {
  Wrapper,
  Title,
  Container,
  ImageContainer,
  ImgWrapper,
  Image,
  SubContainer,
  FooterNav,
  Text,
  Content,
  RowContainer,
  TitleContainer,
  ButtonContainer,
} from "./style.js";

const Footer = ({ number }) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imagePathRef = useRef(null);
  const navRef = useRef(null);
  const contactRef1 = useRef(null);
  const contactRef2 = useRef(null);
  const contactRef3 = useRef(null);
  const contactRef4 = useRef(null);
  const pinRef = useRef(null);
  const sectionTitleRef = useRef(null);

  const onScreenTitle = useOnScreen(titleRef, 0.7);
  const onScreenImage = useOnScreen(imageContainerRef, 0.7);
  const onScreenNav = useOnScreen(navRef, 0.7);

  const [activeMessage, setActiveMessage] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [revealImg, setRevealImg] = useState(false);
  const [revealNav, setRevealNav] = useState(false);
  useEffect(() => {
    if (onScreenTitle) setReveal(onScreenTitle);
  }, [onScreenTitle]);

  useEffect(() => {
    if (onScreenImage) setRevealImg(onScreenImage);
  }, [onScreenImage]);

  useEffect(() => {
    if (onScreenNav) setRevealNav(onScreenNav);
  }, [onScreenNav]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        text: titleRef,
        display: "title",
      });
      handleEnter({
        text: sectionTitleRef,
        display: "title",
      });
      handleEnter({
        el: pinRef,
        display: "pin",
        delay: 0.7,
        // animText: loaderDisplay,
      });
    }
  }, [reveal]);

  useEffect(() => {
    console.log(revealImg);
    if (revealImg) {
      handleEnter({
        el: imagePathRef,
        image: imageRef,
        display: "image",
        delay: 0,
      });
    }
  }, [revealImg]);

  useEffect(() => {
    if (revealNav) {
      handleEnter({
        el: contactRef1,
        display: "tag",
        delay: 0.4,
      });
      handleEnter({
        el: contactRef2,
        display: "tag",
        delay: 0.5,
      });
      handleEnter({
        el: contactRef3,
        display: "tag",
        delay: 0.6,
      });
      handleEnter({
        el: contactRef4,
        display: "tag",
        delay: 0.7,
      });
    }
  }, [revealNav]);
  const isMobile = useIsMobile();

  const copyToClipboard = (_) => {
    setActiveMessage(true);
    navigator.clipboard.writeText("contact@solimanalhalaby.fr");
    setTimeout(() => {
      setActiveMessage(false);
    }, 1500);
  };

  const socials = [
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/soliman-al-halaby/",
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/soliman-al-halaby/",
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/soliman-al-halaby/",
    },
  ];

  return (
    <Wrapper data-scroll-section>
      <TitleContainer>
        <Title ref={titleRef}>Soliman Al Halaby</Title>
        <Pin
          ref={pinRef}
          top={isMobile ? "14.5" : "13"}
          left={isMobile ? "10" : "75"}
          label="get in touch"
        />
      </TitleContainer>
      <TitleSection
        ref={sectionTitleRef}
        top="23"
        left="20"
        number={number}
        title="Contact"
      />
      <Container>
        <SubContainer>
          <FooterNav ref={navRef}>
            <Text ref={contactRef1}>Feel free to contact me !</Text>
            <RowContainer ref={contactRef2}>
              <Content>Contact</Content>
              <ButtonContainer onClick={copyToClipboard}>
                <Button email={true} label="contact@solimanalhalaby.fr" />
                {activeMessage && (
                  <Pin top="-1" left="11" colored label="Copied"></Pin>
                )}
              </ButtonContainer>
            </RowContainer>
            <RowContainer ref={contactRef3}>
              <Content>Find me on</Content>
              <ButtonContainer>
                {socials.map((data, i) => (
                  <Button to={data.link} key={i} index={i} label={data.label} />
                ))}
              </ButtonContainer>
            </RowContainer>
            <RowContainer ref={contactRef4}>
              <Content>Download my resume</Content>
              <ButtonContainer>
                <CircularButton to="/" label="CV" />
              </ButtonContainer>
            </RowContainer>
          </FooterNav>
        </SubContainer>
        <SubContainer ref={imageContainerRef}>
          <ImageContainer ref={imagePathRef}>
            <ImgWrapper ref={imageRef}>
              <Image src="/contact-image.png" />
            </ImgWrapper>
          </ImageContainer>
        </SubContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
