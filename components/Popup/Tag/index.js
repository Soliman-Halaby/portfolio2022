import React, { useState, useRef } from "react";

import Link from "next/link.js";
import { Container, TagStyle } from "./style.js";

const Tag = ({ label, rounded = false, colored = false, style, index }) => {
  console.log(index % 2);
  return (
    <Container>
      <TagStyle
        borderStyle={style}
        colored={colored}
        rounded={index % 2 !== 0 ? !rounded : rounded}
      >
        {label}
      </TagStyle>
    </Container>
  );
};

export default Tag;
