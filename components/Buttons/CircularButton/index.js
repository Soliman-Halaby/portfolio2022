import React, { useState, useRef } from "react";

import Link from "next/link.js";
import { Container, ButtonStyle } from "./style.js";

import { useSetRecoilState, useResetRecoilState } from "recoil";
import { cursorHover } from "recoil/cursorState.js";
const CircularButton = ({ label, to, target }) => {
  const setCursorHover = useSetRecoilState(cursorHover);
  const resetCursor = useResetRecoilState(cursorHover);

  const cursorRotation = () => {
    setCursorHover("expand");
  };

  return (
    <Container onMouseEnter={() => cursorRotation()} onMouseLeave={resetCursor}>
      {to && !target && (
        <Link href={to}>
          <ButtonStyle>{label}</ButtonStyle>
        </Link>
      )}
      {!to && <ButtonStyle>{label}</ButtonStyle>}
      {to && target && (
        <a href={to} target={target}>
          <ButtonStyle>{label}</ButtonStyle>
        </a>
      )}
    </Container>
  );
};

export default CircularButton;
