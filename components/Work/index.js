import React, { useState, useRef, useEffect } from "react";

import { Wrapper, Container, Title, ContainerGrid } from "./style";

import ProjectDisplay from "@/components/ProjectDisplay";
import ProjectsData from "/utils/projects.json";

import useOnScreen from "hook/index.js";
import { handleEnter } from "./animation.js";

import { useIsMobile } from "hook";

const ProjectWork = ({}) => {
  const data = ProjectsData.map((data, i) => ({
    slug: data.slug,
    title: data.title,
    images: data.images,
    image: data.image,
    col: data.colPos,
    colMob: data.mobileCol,
    row: data.rowPos,
    colRow: data.mobileRow,
  }));

  const titleRef = useRef(null);
  const onScreenTitle = useOnScreen(titleRef, 0.7);
  // const onScreenSubtitle = useOnScreen(subtitleRef);
  const [reveal, setReveal] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (onScreenTitle) setReveal(onScreenTitle);
  }, [onScreenTitle]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        text: titleRef,
        display: "title",
      });
    }
  }, [reveal]);
  return (
    <Wrapper data-scroll-section>
      <Container>
        <Title ref={titleRef}>Selected works</Title>
        <ContainerGrid>
          {data.map((data, i) => {
            return (
              <ProjectDisplay
                to={data.slug}
                index={i}
                key={i}
                col={isMobile ? data.colMob : data.col}
                row={isMobile ? data.colRow : data.row}
                // col={data.col}
                // row={data.row}
                title={data.title}
                image={data.image}
              />
            );
          })}
        </ContainerGrid>
      </Container>
    </Wrapper>
  );
};

export default ProjectWork;
