import React, { useState, useRef } from "react";
import Link from "next/link.js";
import { ButtonStyle, Container } from "./style.js";

const Button = ({
  label,
  rounded = false,
  colored = false,
  to,
  className,
  index,
}) => {
  console.log(index);
  return (
    <Container>
      {to && (
        <Link href={to}>
          <ButtonStyle
            className={className}
            colored={colored}
            rounded={index % 2 !== 0 ? rounded : !rounded}
          >
            {label}
          </ButtonStyle>
        </Link>
      )}
      {!to && (
        <ButtonStyle colored={colored} rounded={rounded}>
          {label}
        </ButtonStyle>
      )}
    </Container>
  );
};

export default Button;
