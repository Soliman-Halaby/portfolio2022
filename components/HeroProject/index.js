import React, { useState, useRef, useEffect } from "react";

import Tag from "@/components/Popup/Tag";
import Button from "@/components/Buttons/Button";

import useOnScreen from "hook/index.js";
import { handleEnter } from "./animation.js";

import {
  Wrapper,
  Container,
  Title,
  TitleContainer,
  ImageContainer,
  Image,
  TagWrapper,
  TagContainer,
  TagElementsContainer,
  TagRow,
  Text,
  ContentContainer,
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
  const revealRef = useRef(null);
  const titleRef = useRef(null);
  const tagRef = useRef(null);
  const contentRef = useRef(null);
  const onScreenTitle = useOnScreen(revealRef);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreenTitle) setReveal(onScreenTitle);
  }, [onScreenTitle]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        text: titleRef,
        display: "title",
      });
      handleEnter({
        el: tagRef,
        display: "tag",
        delay: 0.3,
      });
      handleEnter({
        el: contentRef,
        display: "tag",
        delay: 0.6,
      });
    }
  }, [reveal]);

  // console.log(tags);
  return (
    <Wrapper ref={revealRef} data-scroll-section>
      <Container>
        <TitleContainer>
          <Title ref={titleRef}>{title}</Title>
        </TitleContainer>
        <TagWrapper>
          <TagElementsContainer>
            <TagContainer ref={tagRef}>
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
                  // className="project-visit-cta"
                  to={to}
                  target="_blank"
                  label={ctaLabel}
                  colored
                  withArrow
                ></Button>
              </TagSubContainer>
            </TagContainer>
          </TagElementsContainer>
          <TagContainer>
            <ContentContainer>
              <Content ref={contentRef}>{description}</Content>
            </ContentContainer>
          </TagContainer>
        </TagWrapper>
        <ImageContainer>
          <Image
            alt="Project Image"
            data-scroll
            data-scroll-speed="-2"
            src={img}
          ></Image>
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default HeroProject;
