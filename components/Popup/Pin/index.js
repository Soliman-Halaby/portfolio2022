import React, { useState, useRef, forwardRef, useEffect } from "react";

import {
  SuccessMessage,
  CopiedEmail,
  Wrapper,
  SuccessMessageContent,
  SuccessMessageContentContainer,
  ContainerPin,
} from "./style.js";

const Pin = forwardRef(
  (
    {
      label,
      colored = false,
      className,
      action = () => {},
      top = "55",
      left = "50",
      email = false,
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);
    const copyEmail = (_) => {
      // setActiveMessage(true);
      // setPressedButton;
      navigator.clipboard.writeText("contact@solimanalhalaby.fr");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    };
    return (
      <ContainerPin onClick={() => action()} top={top} left={left}>
        {copied && <CopiedEmail>Copied</CopiedEmail>}
        <Wrapper>
          <SuccessMessage
            ref={ref}
            top={top}
            left={left}
            // onClick={() => action()}
            className={className}
            colored={colored}
            onClick={email ? () => copyEmail() : null}
          >
            <SuccessMessageContentContainer>
              <SuccessMessageContent>{label}</SuccessMessageContent>
            </SuccessMessageContentContainer>
            <SuccessMessageContentContainer>
              <SuccessMessageContent>{label}</SuccessMessageContent>
            </SuccessMessageContentContainer>
          </SuccessMessage>
        </Wrapper>
      </ContainerPin>
    );
  }
);

Pin.displayName = "Pin";

export default Pin;
