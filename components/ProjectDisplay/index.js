import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Buttons/Button";

import { useSetRecoilState } from "recoil";
import useOnScreen from "hook";

import { handleEnter } from "./animation.js";

import {
  Wrapper,
  ProjectContainer,
  ImageContainer,
  ImageBlock,
  ImageWrapper,
  RowWrapper,
  Number,
  Title,
} from "./style";
import { cursorState } from "recoil/cursorState";

const ProjectDisplay = ({ col, row, title, to, image = [], index }) => {
  const router = useRouter();

  const buttonRef = useRef(null);
  const timerRef = useRef();
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const [learnMoreCta, setLearnMoreCta] = useState(false);
  const [count, setCount] = useState(0);
  const onScreenImage = useOnScreen(imageRef, 0.35);

  const [reveal, setReveal] = useState(false);

  const setCursorDisplay = useSetRecoilState(cursorState);

  useEffect(() => {
    if (onScreenImage) setReveal(onScreenImage);
  }, [onScreenImage]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        el: imageRef,
        display: "image",
        index: index,
        delay: 1.15,
      });
      handleEnter({
        text: titleRef,
        display: "title",
        // index: index,
        delay: 2,
      });
      handleEnter({
        text: numberRef,
        display: "number",
        // index: index,
        delay: 2.2,
      });
    }
  }, [reveal]);

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

  return (
    <Wrapper
      data-scroll
      // data-scroll-speed={index % 2 === 0 ? "-1" : "0"}
      // onMouseMove={() => console.log("coucou")}
      onClick={() => router.push(`/project/${to}`)}
      col={col}
      row={row}
    >
      <ProjectContainer
        onClick={resetDisplay}
        onMouseOver={updateDisplay}
        onMouseOut={resetDisplay}
      >
        <ImageContainer ref={imageRef}>
          <ImageWrapper>
            {image && (
              <ImageBlock
                // layout="fill"
                // placeholder="blur"
                // blurDataURL={image[count % image.length]}
                data-scroll
                data-scroll-speed={index % 2 === 0 ? "-0.5" : "0"}
                src={image[count % image.length]}
                alt={`Project ${title} outline image`}
              />
            )}
          </ImageWrapper>
        </ImageContainer>
        {title && (
          <RowWrapper>
            <Number ref={numberRef}>0{index + 1}</Number>
            <Title ref={titleRef}>{title}</Title>
          </RowWrapper>
        )}
      </ProjectContainer>
    </Wrapper>
  );
};

export default ProjectDisplay;
