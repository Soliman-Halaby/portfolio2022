import React, { useState, useRef } from "react";

import { Wrapper, Container, Title, ContainerGrid} from "./style";

import ProjectDisplay from "@/components/ProjectDisplay";
import ProjectsData from "/utils/projects.json";

const ProjectWork = ({}) => {
  const data = ProjectsData.map((data, i) => ({
    slug: data.slug,
    title: data.title,
    images: data.images,
    image: data.image,
    col: data.colPos,
    row: data.rowPos
  }));
  return (
    <Wrapper>
      <Container>
        <Title>Selected work</Title>
        {/* {data.map((data, i) => {
          return (
            <ProjectDisplay
              to={data.slug}
              index={i}
              key={i}
              top={`20%`}
              left={`${i}0%`}
              title={data.title}
              image={data.image}
            />
          );
        })} */}
        <ContainerGrid>
        {data.map((data, i) => {
          console.log(data)
          return (
            <ProjectDisplay
              to={data.slug}
              index={i}
              key={i}
              col={data.col}
              row={data.row}
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
