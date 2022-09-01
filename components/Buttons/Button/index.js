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
  target
}) => {
  console.log(index);
  return (
    <Container>
      {to && target &&(
        <Link href={to} passHref>
          <a target='_blank'>
            <ButtonStyle
              className={className}
              colored={colored}
              rounded={index % 2 !== 0 ? rounded : !rounded}
            >
              {label}
            </ButtonStyle>
          </a>
        </Link>
      )}
            {to && !target &&(
        <Link href={to} passHref>
            <ButtonStyle
              className={className}
              colored={colored}
              rounded={index % 2 !== 0 ? rounded : !rounded}
            >
              {label}
            </ButtonStyle>
        </Link>)}
      {!to && !target &&(
        <ButtonStyle colored={colored} rounded={rounded}>
          {label}
        </ButtonStyle>
      )}
    </Container>
  );
};

export default Button;
