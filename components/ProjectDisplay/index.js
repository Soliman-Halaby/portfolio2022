import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Buttons/Button";

import { useSetRecoilState } from "recoil";
import {
  Wrapper,
  ProjectContainer,
  ImageContainer,
  Image,
  RowWrapper,
  Number,
  Title,
} from "./style";
import { cursorState } from "recoil/cursorState";

const ProjectDisplay = ({ col, row, title, to, image = [], index }) => {
  const [learnMoreCta, setLearnMoreCta] = useState(false);
  const router = useRouter();

  const setCursorDisplay = useSetRecoilState(cursorState);

  const buttonRef = useRef(null);
  const timerRef = useRef();
  const [count, setCount] = useState(0);

  const updateDisplay = () => {
    setLearnMoreCta(true);
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 600);

    setCursorDisplay("customButton");
  };

  const resetDisplay = () => {
    setLearnMoreCta(false);
    clearInterval(timerRef.current);
    setCount(0);
    setCursorDisplay("simple");
  };

  if (buttonRef) {
    console.log(buttonRef);
  }
  console.log(buttonRef);
  useEffect(() => {
    console.log(buttonRef);
    if (buttonRef.current == null || buttonRef == null) return;

    document.addEventListener("mousemove", (e) => {
      if (buttonRef.current == null) return;
      buttonRef.current.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.clientX + "px;"
      );
    });
  }, []);

  return (
    <Wrapper
      onMouseMove={() => console.log("coucou")}
      onClick={() => router.push(`/project/${to}`)}
      col={col}
      row={row}
    >
      <ProjectContainer onMouseOver={updateDisplay} onMouseOut={resetDisplay}>
        {image && (
          <ImageContainer>
            <Image
              data-scroll
              data-scroll-speed={index % 2 === 0 ? "-0.5" : "0.5"}
              src={image[count % image.length]}
            />
          </ImageContainer>
        )}
        {title && (
          <RowWrapper>
            <Number>0{index + 1}</Number>
            <Title>{title}</Title>
          </RowWrapper>
        )}
      </ProjectContainer>
    </Wrapper>
  );
};

export default ProjectDisplay;
