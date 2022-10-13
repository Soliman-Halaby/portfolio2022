import React, { useState, useRef, useEffect } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

import Tag from "@/components/Popup/Tag";
import Button from "@/components/Buttons/Button";

import {
  Wrapper,
  Container,
  Title,
  TitleContainer,
  ImageContainer,
  Image,
  TagWrapper,
  TagContainer,
  TagRow,
  Text,
  Content,
  TagSubContainer,
} from "./style.js";

const HeroProject = ({
  tags,
  title,
  content,
  infos,
  description,
  to,
  ctaLabel,
  img,
}) => {
  // console.log(tags);
  return (
    <Wrapper data-scroll-section>
      <Container>
        <Title>{title}</Title>
        <TagWrapper>
          <TagContainer>
            <TagSubContainer>
              {infos.map((data, i) => {
                return (
                  <Tag withDot dashed={true} index={i} key={i} label={data} />
                );
              })}
            </TagSubContainer>
            <TagSubContainer>
              <TagRow>
                <Text>{content}</Text>
                {tags.map((data, i) => {
                  return <Tag index={i} key={i} label={data} />;
                })}
              </TagRow>
              <Button
                className="project-visit-cta"
                to={to}
                target="_blank"
                label={ctaLabel}
                colored
                withArrow
              ></Button>
            </TagSubContainer>
          </TagContainer>
          <TagContainer>
            <Content>{description}</Content>
          </TagContainer>
        </TagWrapper>
        <ImageContainer data-scroll data-scroll-speed='2'>
          <Image alt="Project Image" data-scroll data-scroll-speed="-1" src={img}></Image>
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default HeroProject;
