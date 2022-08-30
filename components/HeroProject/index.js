import React, { useState, useRef } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Pin from "@/components/Popup/Pin";
import Tag from "@/components/Popup/Tag";
import Button from "@/components/Buttons/Button";
import {
  Wrapper,
  Container,
  Title,
  TitleContainer,
  Image,
  TagWrapper,
  TagContainer,
  Text,
  Content,
  TagSubContainer,
} from "./style.js";

const HeroHome = ({}) => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Wrapper>
      <Container>
        <Title>
          MovieReact
          <br />
          website
        </Title>
        <TagWrapper>
          <TagContainer>
            <TagSubContainer>
              <Tag rounded label="RÔLE" />
              <Tag label="03/03/2023" />
            </TagSubContainer>
            <TagSubContainer>
              <Text>Using</Text>
              <Tag rounded label="PHP" />
              <Tag rounded label="Vanilla js" />
              <Button className="project-visit-cta" to="/" label="Learn more" />
            </TagSubContainer>
          </TagContainer>
          <TagContainer>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
            </Content>
          </TagContainer>
        </TagWrapper>
        <Image src="/moviereact-image.png"></Image>
      </Container>
    </Wrapper>
  );
};

export default HeroHome;
