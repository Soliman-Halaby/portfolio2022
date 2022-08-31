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
const BottomProject = ({}) => {
  const projects = [
    {
      name: "Eclipse",
      to: "/eclipse",
    },
    {
      name: "Selfer App",
      to: "/selfer-app",
    },
    {
      name: "GTA Virtual Moduling",
      to: "/eclipse",
    },
    {
      name: "Selfer App",
      to: "/selfer-app",
    },
    {
      name: "Eclipse",
      to: "/eclipse",
    },
    {
      name: "Selfer App",
      to: "/selfer-app",
    },
  ];
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
              <LinkProject to={data.to} index={i} key={i} label={data.name} />
            );
          })}
        </ProjectsContainer>
      </Container>
    </Wrapper>
  );
};

export default BottomProject;
