import React, { useState, useRef } from "react";

import Link from "next/link.js";
import { Container, ButtonStyle } from "./style.js";

const CircularButton = ({ label, to }) => {
  return (
    <Container>
      {to && (
        <Link href={to}>
          <ButtonStyle>{label}</ButtonStyle>
        </Link>
      )}
      {!to && <ButtonStyle>{label}</ButtonStyle>}
    </Container>
  );
};

export default CircularButton;
