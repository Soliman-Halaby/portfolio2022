import React, { useState, useRef } from "react";

import Link from "next/link.js";
import { Container, TagStyle } from "./style.js";

const Tag = ({
  label,
  rounded = false,
  colored = false,
  dashed,
  index,
  withDot = false,
}) => {
  console.log(index % 2);
  return (
    <Container>
      <TagStyle
        borderStyle={dashed}
        colored={colored}
        rounded={index % 2 !== 0 ? !rounded : rounded}
      >
        {withDot && (
          <svg
            width={5}
            height={5}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={2.5} cy={2.5} r={2.5} fill="#1E1E1E" />
          </svg>
        )}
        {label}
      </TagStyle>
    </Container>
  );
};

export default Tag;
