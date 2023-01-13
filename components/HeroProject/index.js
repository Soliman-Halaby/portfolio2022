import React, { useState, useRef, useEffect } from "react";

import { useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState.js";
import Tag from "@/components/Popup/Tag";
import Button from "@/components/Buttons/Button";

import useOnScreen from "hook/index.js";

import { useIsMobile } from "hook/index.js";
import { handleEnter } from "./animation.js";

import {
  Wrapper,
  Container,
  TitleContainer,
  Title,
  MadeWith,
  MadeWithContainer,
  MadeWithLink,
  ImageWrapper,
  ImageContainer,
  ImageBlock,
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
  team,
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
  const imageBlockRef = useRef(null);
  const imageRef = useRef(null);
  const madeWithRef = useRef(null);

  const loaderDisplay = useRecoilValue(loaderState);
  const onScreenTitle = useOnScreen(revealRef);

  const isMobile = useIsMobile();
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreenTitle) setReveal(onScreenTitle);
  }, [onScreenTitle]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        text: titleRef,
        display: "title",
        animText: loaderDisplay,
        delay: 1.05,
      });
      handleEnter({
        el: madeWithRef,
        display: "tag",
        delay: 1.9,
        animText: loaderDisplay,
      });
      handleEnter({
        el: tagRef,
        display: "tag",
        delay: 1.45,
        animText: loaderDisplay,
      });
      handleEnter({
        el: contentRef,
        display: "tag",
        delay: 1.6,
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

  return (
    <Wrapper ref={revealRef} data-scroll-section>
      <Container>
        <TitleContainer>
          <Title ref={titleRef}>{title}</Title>
          {team && (
            <MadeWith>
              <MadeWithContainer ref={madeWithRef}>
                With {""}
                {team.map((member, index) => {
                  return (
                    <MadeWithLink key={index} target="_blank" href={member.url}>
                      {member.name} {index !== team.length - 1 ? "," : ""}
                    </MadeWithLink>
                  );
                })}
              </MadeWithContainer>
            </MadeWith>
          )}
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
        <ImageContainer ref={imageBlockRef}>
          <ImageWrapper ref={imageRef}>
            <ImageBlock
              // placeholder="blur"
              // width={"100%"}
              // height={isMobile ? "100vh" : "60vh"}
              layout="fill"
              priority
              placeholder="blur"
              blurDataURL="https://solimanalhalaby.fr/blurImage.png"
              alt={`${title} Hero Image`}
              data-scroll
              data-scroll-speed="-2"
              src={img}
            ></ImageBlock>
          </ImageWrapper>
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default HeroProject;
