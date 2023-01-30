import React, { useState, useRef, useEffect } from "react";

import { Wrapper, Container, Title, ContainerGrid } from "./style";

import ProjectDisplay from "@/components/ProjectDisplay";
import ProjectsData from "/utils/projects.json";

import useOnScreen from "hook/index.js";
import { handleEnter } from "./animation.js";

import { useIsMobile } from "hook";
import { useIsSmallDesktop } from "hook";
const ProjectWork = ({ page }) => {
  const data = ProjectsData.map((data, i) => ({
    slug: data.slug,
    title: data.title,
    images: data.images,
    image: data.image,
    col: data.colPos,
    colMob: data.mobileCol,
    midColPos: data?.midColPos,
    row: data.rowPos,
    colRow: data.mobileRow,
  }));

  const titleRef = useRef(null);
  const isMobile = useIsMobile();
  const useIsDesktop = useIsSmallDesktop();
  // console.log(useIsDesktop);

  const onScreenTitle = useOnScreen(titleRef, isMobile ? 0.45 : 0.3);
  // const onScreenSubtitle = useOnScreen(subtitleRef);
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

  let attributes = [];

  if (isMobile) {
    attributes["data-scroll-target"] = ".selected-work";
  }

  return (
    <Wrapper display={page} className="selected-work" data-scroll-section>
      <Container display={page}>
        <Title
          data-scroll={isMobile && true}
          data-scroll-sticky
          {...attributes}
          ref={titleRef}
          display={page}
        >
          Selected works
        </Title>
        <ContainerGrid display={page}>
          {data.map((data, i) => {
            return (
              <ProjectDisplay
                to={data.slug}
                index={i}
                key={i}
                col={
                  isMobile
                    ? data.colMob
                    : useIsDesktop
                    ? data.midColPos
                    : data.col
                }
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
