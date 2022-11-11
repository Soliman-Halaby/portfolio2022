import React, { useState, useRef } from "react";
import Link from "next/link.js";
import { ButtonStyle, Container } from "./style.js";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { cursorHover } from "recoil/cursorState.js";
const ProjectButton = ({
  label,
  rounded = false,
  colored = false,
  to,
  index,
  className,
}) => {
  const setCursorHover = useSetRecoilState(cursorHover);
  const resetCursor = useResetRecoilState(cursorHover);

  const cursorRotation = () => {
    setCursorHover("expand");
  };

  // console.log(index % 2);
  return (
    <Container onMouseEnter={() => cursorRotation()} onMouseLeave={resetCursor}>
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
