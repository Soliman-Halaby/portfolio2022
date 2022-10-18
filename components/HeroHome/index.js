import React, { useState, useRef, useEffect } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";

import { handleEnter } from "./animation.js";

import { useLocomotiveScroll } from 'react-locomotive-scroll'

import {
  Wrapper,
  Container,
  Title,
  TitleContainer,
  Image,
  ImageWrapper,
  Text,
} from "./style.js";

const HeroHome = ({ title, subtitle, sectionTitle, label, image }) => {
  const { scroll } = useLocomotiveScroll()

  const _subtitle = useRef(null)
  const _el = useRef(null)
  const _pin = useRef(null)
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };


  const titleRef = useRef(null)

  console.log(titleRef.current)

  useEffect(() => {
   handleEnter({
     el: _el,
     subtitle: _subtitle,
     text: titleRef,
    //  pin: _pin,
     display: 'center',
     animText: false
   })
   handleEnter({
     el: _el,
     subtitle: _subtitle,
     text: _subtitle,
    //  pin: _pin,
     display: 'left',
     animText: false
   })
  }, [])



  console.log(scroll)
  return (
    <Wrapper data-scroll-section ref={_el}>
      <TitleSection
        className="hero_title-section"
        number="02"
        title={sectionTitle}
      />
      <Container>
        <Title
          data-scroll
          data-scroll-speed="3"
          ref={titleRef}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Title ref={_subtitle} alignRight dangerouslySetInnerHTML={{__html: subtitle}}/>
          {/* {subtitle} */}
          <Pin
            top="30"
            left="90"
            action={scrollToBottom}
            className="hero_pin-section"
            label={label}
            ref={_pin}
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
        <ImageWrapper className='image-wrapper' 
        >
          <Image src={image} alt='Img'
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
