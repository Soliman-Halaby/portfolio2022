import React, { useState, useRef } from "react";
import Link from "next/link.js";
import { ButtonStyle, Container } from "./style.js";

const Button = ({ label, rounded = false, colored = false, to, className }) => {
  return { to } ? (
    <Container>
      {to && (
        <Link href={to}>
          <ButtonStyle
            className={className}
            colored={colored}
            rounded={rounded}
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
  ) : (
    <ButtonStyle className={className} colored={colored} rounded={rounded}>
      {label}
    </ButtonStyle>
  );
};

export default Button;
