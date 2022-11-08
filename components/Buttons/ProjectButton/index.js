/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

import { ButtonStyle, Container } from "./style.js";

const Button = forwardRef(({ label, className }, ref) => {
  console.log("ref", ref);

  // console.log(index);
  return (
    <Container className={className}>
      <ButtonStyle>
        {label}
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
      </ButtonStyle>
    </Container>
  );
});

export default Button;
