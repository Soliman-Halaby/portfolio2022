import React, { useState, useRef, useEffect } from "react";
import Link from "next/link.js";
import { ButtonStyle, Container } from "./style.js";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { cursorHover } from "recoil/cursorState.js";

import { handleEnter } from "./animation.js";
const ProjectButton = ({
  label,
  rounded = false,
  colored = false,
  to,
  index,
  reveal,
  className,
}) => {
  const containerRef = useRef(null);

  const setCursorHover = useSetRecoilState(cursorHover);
  const resetCursor = useResetRecoilState(cursorHover);

  const cursorRotation = () => {
    setCursorHover("expand");
  };

  useEffect(() => {
    if (reveal) {
      handleEnter({
        el: containerRef,
        display: "tag",
        index: index,
        delay: 0.65,
      });
    }
  }, [reveal]);

  // console.log(index % 2);
  return (
    <Container
      ref={containerRef}
      onMouseEnter={() => cursorRotation()}
      onMouseLeave={resetCursor}
    >
      <Link href={to}>
        <ButtonStyle
          className={className}
          colored={colored}
          rounded={index % 2 !== 0 ? !rounded : rounded}
        >
          {label}
        </ButtonStyle>
      </Link>
    </Container>
  );
};

export default ProjectButton;
