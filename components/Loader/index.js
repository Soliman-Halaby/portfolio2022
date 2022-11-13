import React, { useState, useRef, useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { loaderState } from "recoil/loaderState";

import {
  Wrapper,
  Container,
  LoaderNumberContainer,
  LoaderNumber,
  ImgContainer,
} from "./style";

const Loader = ({}) => {
  const [progress, setProgress] = useState(0);
  const setLoaderDisplay = useSetRecoilState(loaderState);
  const loaderDisplay = useRecoilValue(loaderState);
  const containerRef = useRef(null);

  function handleMouse(e) {
    const container = containerRef.current;
    if (!container) return;

    if (loaderDisplay) {
      container.style.left = `${e.clientX - container.offsetWidth * 2}px`;
      container.style.top = `${e.clientY - container.offsetHeight}px`;
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouse);

    document.addEventListener("scroll", (e) => {
      if (containerRef.current == null) return;
    });
  }, []);
  useEffect(() => {
    // if (localStorage.getItem("loader") === null) {
    //   setLoaderDisplay(localStorage.getItem("loader"));
    // }

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          document.body.style.overflow = "visible";
          // setLoaderDisplay(localStorage.getItem("loader"));
          setLoaderDisplay("false");
          return 100;
        }

        const diff = Math.random() * 10;
        if (oldProgress <= 100) {
          document.body.style.overflow = "hidden";
          return Math.min(oldProgress + Math.round(diff), 100);
        }
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      localStorage.setItem("loader", "false");
    }
  }, [progress]);

  return (
    <Wrapper className={loaderDisplay}>
      <Container className={loaderDisplay}>
        <ImgContainer ref={containerRef} className={loaderDisplay}>
          <svg
            width={443}
            height={501}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M410.006 302.958c-30.616-11.773-132.158-35.39-172.449-47.18 37.107-11.655 146.805-41.601 175.855-56.618 62.94-31.701 5.065-130.584-53.059-87.154-29.061 21.714-108.225 110.312-132.456 135.383 6.535-48.542 45.406-147.255 45.484-192.46.123-70.319-98.223-77.187-98.364 3.177-.061 35.16 36.817 154.096 43.206 189.267-43.48-31.887-106.225-112.361-141.66-134.188-56.374-35.258-114.582 56.724-43.697 92.008 22.557 10.084 151.499 40.446 182.117 50.545-46.792 18.335-146.79 33.229-182.304 56.607-64.573 43.418-5.062 128.909 53.059 87.154 25.834-20.046 104.998-108.644 132.456-135.384-9.76 48.537-45.376 130.513-45.479 189.112-.102 58.599 98.242 67.142 98.364-3.177.106-60.273-33.598-150.742-43.211-185.918 45.09 33.564 109.467 102.321 138.441 130.834 46.676 48.635 119.434-65.088 43.697-92.008Z"
              fill="#1E1E1E"
            />
          </svg>
        </ImgContainer>
        <LoaderNumberContainer>
          <LoaderNumber className={loaderDisplay}>{progress}%</LoaderNumber>
        </LoaderNumberContainer>
      </Container>
    </Wrapper>
  );
};

export default Loader;
