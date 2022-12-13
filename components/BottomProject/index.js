import React, { useEffect, useState, useRef } from "react";

import { handleEnter } from "./animation.js";
import useOnScreen from "hook/index.js";
import Icon from "utils/Icon.js";
import {
  Wrapper,
  Container,
  Title,
  TitleWrapper,
  TitleContainer,
  Image,
  ProjectsContainer,
} from "./style.js";
import Tag from "@/components/Popup/Tag/index.js";
import LinkProject from "@/components/Buttons/LargeButton";
const BottomProject = ({ title, projects }) => {
  const titleRef = useRef(null);
  const onScreenTitle = useOnScreen(titleRef, 0.7);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreenTitle) setReveal(onScreenTitle);
  }, [onScreenTitle]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        text: titleRef,
        display: "title",
        delay: 0.3,
      });
    }
  }, [reveal]);
  return (
    <Wrapper data-scroll-section>
      <Container>
        <TitleWrapper>
          <TitleContainer ref={titleRef}>
            <Title>{title}</Title>
            {title && <Icon size={48} icon="left-arrow-48" />}
          </TitleContainer>
        </TitleWrapper>
        <ProjectsContainer>
          {projects.map((data, i) => {
            return (
              <LinkProject
                reveal={reveal}
                to={data.slug}
                index={i}
                key={i}
                label={data.title}
              />
            );
          })}
        </ProjectsContainer>
      </Container>
    </Wrapper>
  );
};

export default BottomProject;
