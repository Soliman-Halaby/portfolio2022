import React, { useState, useRef } from "react";

import { ButtonStyle } from "./style.js";

const Button = ({ label, rounded = false, yellow = false, to }) => {
  return (
    <ButtonStyle href={to} yellow={yellow} rounded={rounded}>
      {label}
    </ButtonStyle>
  );
};

export default Button;
