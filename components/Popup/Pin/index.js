import React, { useState, useRef } from "react";

import { SuccessMessage } from "./style.js";

const Pin = ({
  label,
  colored = false,
  className,
  action,
  top = "50",
  left = "50",
}) => {
  return (
    <SuccessMessage
      top={top}
      left={left}
      onClick={action}
      className={className}
      colored={colored}
    >
      {label}
    </SuccessMessage>
  );
};

export default Pin;
