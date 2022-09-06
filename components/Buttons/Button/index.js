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
  target,
  withArrow = false,
}) => {
  // console.log(index);
  return (
    <Container>
      {to && target && (
        <Link href={to} passHref>
          <a target="_blank">
            <ButtonStyle
              className={className}
              colored={colored}
              rounded={index % 2 !== 0 ? rounded : !rounded}
            >
              {label}
              {withArrow && (
                <svg
                  width={16}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8c-4.186 0-7.579-3.582-7.579-8M16 8c-4.186 0-7.579 3.582-7.579 8M16 8H0"
                    stroke="#1E1E1E"
                  />
                </svg>
              )}
            </ButtonStyle>
          </a>
        </Link>
      )}
      {to && !target && (
        <Link href={to} passHref>
          <ButtonStyle
            className={className}
            colored={colored}
            rounded={index % 2 !== 0 ? rounded : !rounded}
          >
            {label}
            {withArrow && (
                <svg
                  width={16}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8c-4.186 0-7.579-3.582-7.579-8M16 8c-4.186 0-7.579 3.582-7.579 8M16 8H0"
                    stroke="#1E1E1E"
                  />
                </svg>
              )}
          </ButtonStyle>
        </Link>
      )}
      {!to && !target && (
        <ButtonStyle colored={colored} rounded={rounded}>
          {label}
        </ButtonStyle>
      )}
    </Container>
  );
};

export default Button;
