/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

import { ButtonStyle, Container } from "./style.js";

import Icon from "utils/Icon.js";
const Button = forwardRef(({ label, className }, ref) => {
  // console.log(index);
  return (
    <Container className={className}>
      <ButtonStyle>
        {label}
        <Icon size={16} color="#1E1E1E" icon="right-arrow-16" />
      </ButtonStyle>
    </Container>
  );
});

export default Button;
