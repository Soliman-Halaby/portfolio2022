import React, { useState, useRef } from "react";

import {
  Wrapper,
  Container,
  Title,
  TitleContainer,
  Image,
  ProjectsContainer,
} from "./style.js";
import Tag from "@/components/Popup/Tag/index.js";
import LinkProject from "@/components/Buttons/LargeButton";
const BottomProject = ({ projects }) => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>More Project</Title>
          <Image src="/arrow-right.svg" />
        </TitleContainer>
        <ProjectsContainer>
          {projects.map((data, i) => {
            return (
              <LinkProject
                to={data.title}
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
