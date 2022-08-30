import React, { useState, useRef } from "react";

import { ButtonStyle } from "./style.js";

const Button = ({ label, rounded = false, colored = false, to}) => {
  return (
    <ButtonStyle href={to} colored={colored} rounded={rounded}>
      {label}
    </ButtonStyle>
  );
};

export default Button;
