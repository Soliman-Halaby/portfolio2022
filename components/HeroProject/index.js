import React, { useState, useRef, useEffect } from "react";

import TitleSection from "@/components/Popup/SectionTitle";

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
    <Wrapper>
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
              <Text>{content}</Text>
              {tags.map((data, i) => {
                return <Tag index={i} key={i} label={data} />;
              })}
              <Button
                className="project-visit-cta"
                to={to}
                target="_blank"
                label={ctaLabel}
                withArrow
              ></Button>
            </TagSubContainer>
          </TagContainer>
          <TagContainer>
            <Content>{description}</Content>
          </TagContainer>
        </TagWrapper>
        <Image src={img}></Image>
      </Container>
    </Wrapper>
  );
};

export default HeroProject;
