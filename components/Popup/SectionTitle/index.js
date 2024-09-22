import React, { useState, useRef, forwardRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingState } from "recoil/loaderState.js";
import { Title, Number, TitleContent } from "./style";

import useOnScreen from "hook/index.js";
import { handleEnter } from "./animation";
const SectionPart = forwardRef(
  (
    { number, title, className, top = "25", left = "20", loader = false },
    ref
  ) => {
    const numberRef = useRef(null);
    const onScreen = useOnScreen(numberRef);
    const [reveal, setReveal] = useState(false);
    const [loaderDisplay, setLoaderDisplay] = useRecoilState(loadingState);

    useEffect(() => {
      if (onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
      if (reveal) {
        handleEnter({
          text: numberRef,
          display: "text",
          animText: loaderDisplay,
          loader: loader,
        });
      }
    }, [reveal]);

    return (
      <Title top={top} left={left}>
        <Number ref={numberRef} dangerouslySetInnerHTML={{ __html: number }} />
        <TitleContent ref={ref} dangerouslySetInnerHTML={{ __html: title }} />
      </Title>
    );
  }
);

SectionPart.displayName = "SectionPart";
export default SectionPart;
