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
const BottomProject = ({ title, projects }) => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>{title}</Title>
          {title && (
            <svg
              width={48}
              height={48}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 24C35.443 24 25.263 13.255 25.263 0M48 24c-12.557 0-22.737 10.745-22.737 24M48 24H0"
                stroke="#1E1E1E"
              />
            </svg>
          )}
        </TitleContainer>
        <ProjectsContainer>
          {projects.map((data, i) => {
            return (
              <LinkProject
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
