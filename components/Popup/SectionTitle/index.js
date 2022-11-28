import React, { useState, useRef, forwardRef, useEffect } from "react";
import { Title, Number, TitleContent } from "./style";

const SectionPart = forwardRef(
  ({ number, title, className, top = "25", left = "20" }, ref) => {
    return (
      <Title top={top} left={left}>
        <Number dangerouslySetInnerHTML={{ __html: number }} />
        <TitleContent ref={ref} dangerouslySetInnerHTML={{ __html: title }} />
      </Title>
    );
  }
);

SectionPart.displayName = "SectionPart";
export default SectionPart;
