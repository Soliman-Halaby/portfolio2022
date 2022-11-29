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
  MadeWithLink,
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
      });
      handleEnter({
        el: tagRef,
        display: "tag",
        delay: 0.3,
        animText: loaderDisplay,
      });
      handleEnter({
        el: contentRef,
        display: "tag",
        delay: 0.6,
        animText: loaderDisplay,
      });
    }
  }, [reveal]);

  // console.log(tags);
  return (
    <Wrapper ref={revealRef} data-scroll-section>
      <Container>
        <TitleContainer>
          <Title ref={titleRef}>{title}</Title>
          {team && (
            <MadeWith>
              With <></>
              {team.map((member, index) => {
                return (
                  <MadeWithLink key={index} target="_blank" href={member.url}>
                    {member.name} ,
                  </MadeWithLink>
                );
              })}
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
        <ImageContainer>
          <ImageBlock
            // placeholder="blur"
            // width={"100%"}
            // height={isMobile ? "100vh" : "60vh"}
            // layout="fill"
            alt="Project Image"
            data-scroll
            data-scroll-speed="-2"
            src={img}
          ></ImageBlock>
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default HeroProject;
