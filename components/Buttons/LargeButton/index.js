import React, { useState, useRef } from "react";
import Link from "next/link.js";
import { ButtonStyle, Container } from "./style.js";

const ProjectButton = ({
  label,
  rounded = false,
  colored = false,
  to,
  index,
  className,
}) => {
  console.log(index % 2);
  return (
    <Container>
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
