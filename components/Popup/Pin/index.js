import React, { useState, useRef, forwardRef, useEffect } from "react";

import {
  SuccessMessage,
  SuccessMessageContent,
  SuccessMessageContentContainer,
} from "./style.js";

const Pin = forwardRef(
  (
    { label, colored = false, className, action, top = "55", left = "50" },
    ref
  ) => {
    return (
      <SuccessMessage
        ref={ref}
        top={top}
        left={left}
        onClick={action}
        className={className}
        colored={colored}
      >
        <SuccessMessageContentContainer>
          <SuccessMessageContent>{label}</SuccessMessageContent>
        </SuccessMessageContentContainer>
        <SuccessMessageContentContainer>
          <SuccessMessageContent>{label}</SuccessMessageContent>
        </SuccessMessageContentContainer>
      </SuccessMessage>
    );
  }
);

Pin.displayName = "Pin";

export default Pin;
