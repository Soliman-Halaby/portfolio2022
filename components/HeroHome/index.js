import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";

import { Wrapper, Container, Title, TitleContainer, Image, Text } from "./style.js";

const HeroHome = ({ title, subtitle, sectionTitle,label, image }) => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const test = {
    hidden:{opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.2
      }
    }
  }
  return (
    <Wrapper data-scroll-section>
      <TitleSection
        className="hero_title-section"
        number="02"
        title={sectionTitle}
      />
      <Container>
        <Title 
          variants={test} 
          initial='hidden' 
          animate='visible'
          
        >
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
            key={image}
            initial={{ scaleX: 0.25 }}
            animate={{ scaleX: 1 }}
            transition={{   
              delay: 0.5,
              transition: {
                ease: "easeInOut",
                duration: 1.2
              },
              // default: { ease: "anticipate" } 
            }}
          />
        {/* <motion.img
          className="box"
          src={image}
          key={image}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{   
            delay: 0.5,
            transition: { duration: 2 },
            default: { ease: "linear" } }}
          /> */}
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
