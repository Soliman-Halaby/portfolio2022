import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Buttons/Button";
import {
  Wrapper,
  ProjectContainer,
  Image,
  RowWrapper,
  Number,
  Title,
} from "./style";

const ProjectDisplay = ({ top, left, title, to, image, index }) => {
  const [learnMoreCta, setLearnMoreCta] = useState(false);
  const router = useRouter();

  // const displayCta = (to) => {
  //   router.push(`/${to}`)
  // }

  const [imageArray, setImageArray] = useState(image);

  useEffect(() => {
    setImageArray(image);
  }, []);
  console.log("array", imageArray);

  return (
    <Wrapper
      onClick={() => router.push(`/project/${to}`)}
      top={top}
      left={left}
    >
      <ProjectContainer
        onMouseOver={() => setLearnMoreCta(true)}
        onMouseLeave={() => setLearnMoreCta(false)}
      >
        {learnMoreCta && (
          <Button
            className="learn-more-cta"
            to="/cc"
            colored
            label="Learn more"
            withArrow
          />
          // </Button>
        )}
        {imageArray && <Image src={imageArray[0]} />}
        <RowWrapper>
          <Number>0{index + 1}</Number>
          <Title>{title}</Title>
        </RowWrapper>
      </ProjectContainer>
    </Wrapper>
  );
};

export default ProjectDisplay;
