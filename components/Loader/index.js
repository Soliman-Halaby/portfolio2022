import React, { useState, useRef, useEffect } from "react";
import Icon from "utils/Icon";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState } from "recoil/loaderState";
import { loaderAnim } from "recoil/loaderState";

import TitleSection from "@/components/Popup/SectionTitle";

import { handleEnter } from "./animation";
import { handleExit } from "./animation";
import useOnScreen from "hook/index.js";

import { useIsMobile } from "hook/index.js";
import {
  Wrapper,
  Container,
  LoaderNumberContainer,
  LoaderNumber,
  ImgContainer,
  LoaderNumberMask,
} from "./style";

import gsap from "gsap";
import ScrollTrigger from "vendor/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Loader = ({}) => {
  const [progress, setProgress] = useState(0);
  const setLoaderDisplay = useSetRecoilState(loadingState);
  const loaderDisplay = useRecoilValue(loadingState);

  const loaderAnimState = useRecoilValue(loaderAnim);
  const setLoaderAnim = useSetRecoilState(loaderAnim);

  const isMobile = useIsMobile();

  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const wrapperRef = useRef(null);

  const onScreen = useOnScreen(pinRef);

  const [reveal, setReveal] = useState(false);
  const [loaderNumbers, setLoaderNumbers] = useState([
    0, 12, 27, 42, 69, 81, 100,
  ]);

  const [currentNumbersIndex, setCurrentNumbersIndex] = useState(0);

  const [animationIndex, setAnimationIndex] = useState(0);

  // Fonction pour animer le conteneur des LoaderNumber
  const animateLoaderNumberContainer = () => {
    if (animationIndex < loaderNumbers.length + 1) {
      gsap.to(document.querySelector(".loader-number-mask"), {
        yPercent: -(animationIndex * 100), // Déplacez le conteneur vers translateY(-100%) * indice actuel
        duration: 0.8, // Durée de l'animation (1 seconde)
        ease: "power2.inOut", // Type d'animation
        onComplete: () => {
          // Cette fonction est appelée lorsque l'animation est terminée
          setAnimationIndex(animationIndex + 1); // Incrémentez l'indice d'animation
        },
      });
    } else {
      setLoaderAnim(true);

      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
      // localStorage.setItem("loader", "false")

      setTimeout(() => {
        setLoaderDisplay(false);
      }, 2500);
    }
  };

  // Utilisez useEffect pour déclencher l'animation au changement de l'indice
  useEffect(() => {
    animateLoaderNumberContainer();
  }, [animationIndex]);

  // Utilisez setInterval pour mettre à jour l'indice d'animation chaque seconde
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationIndex(animationIndex + 1);
    }, 800);

    // Nettoyez l'intervalle lorsque le composant est démonté
    return () => {
      clearInterval(animationInterval);
    };
  }, [animationIndex]);

  useEffect(() => {
    handleEnter({
      text: pinRef,
      display: "pin",
      animText: loaderDisplay,
    });
  }, []);

  function handleMouse(e) {
    const container = containerRef.current;
    if (!container) return;

    if (loaderDisplay) {
      container.style.left = `${e.clientX - container.offsetWidth * 0.5}px`;
      container.style.top = `${e.clientY - container.offsetHeight * 0.5}px`;
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouse);

    document.addEventListener("scroll", (e) => {
      if (containerRef.current == null) return;
    });
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          document.body.style.overflow = "visible";
          document.body.style.height = "100%";

          return 100;
        }

        const diff = Math.random() * 10;
        if (oldProgress <= 100) {
          document.body.style.overflow = "hidden";
          document.body.style.height = "100vh";
          return Math.min(oldProgress + Math.round(diff), 100);
        }
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
    }
  }, [progress]);

  useEffect(() => {
    if (loaderAnimState) {
      setTimeout(() => {
        // setLoaderDisplay(false);
      }, 2500);

      handleExit({
        display: "text",
        text: document.querySelector(".loader-number-mask"),
        animText: loaderDisplay,
        delay: 0.6,
      });

      handleExit({
        display: "image",
        el: containerRef,
        animText: loaderDisplay,
        delay: 1.3,
      });

      handleExit({
        display: "container",
        el: wrapperRef,
        animText: loaderDisplay,
        delay: 1.5,
      });
    }
  }, [loaderAnimState]);
  return (
    <Wrapper ref={wrapperRef} className={loaderDisplay}>
      <Container anim={loaderAnimState} className={loaderDisplay}>
        <TitleSection
          // top={isMobile ? "11.5" : "25"}
          ref={pinRef}
          number="01"
          loader={true}
          title="Soliman Al Halaby Creative Developer"
        />
        <ImgContainer ref={containerRef} className={loaderDisplay}>
          {/* <svg
            width={443}
            height={501}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M410.006 302.958c-30.616-11.773-132.158-35.39-172.449-47.18 37.107-11.655 146.805-41.601 175.855-56.618 62.94-31.701 5.065-130.584-53.059-87.154-29.061 21.714-108.225 110.312-132.456 135.383 6.535-48.542 45.406-147.255 45.484-192.46.123-70.319-98.223-77.187-98.364 3.177-.061 35.16 36.817 154.096 43.206 189.267-43.48-31.887-106.225-112.361-141.66-134.188-56.374-35.258-114.582 56.724-43.697 92.008 22.557 10.084 151.499 40.446 182.117 50.545-46.792 18.335-146.79 33.229-182.304 56.607-64.573 43.418-5.062 128.909 53.059 87.154 25.834-20.046 104.998-108.644 132.456-135.384-9.76 48.537-45.376 130.513-45.479 189.112-.102 58.599 98.242 67.142 98.364-3.177.106-60.273-33.598-150.742-43.211-185.918 45.09 33.564 109.467 102.321 138.441 130.834 46.676 48.635 119.434-65.088 43.697-92.008Z"
              fill="#1E1E1E"
            />
          </svg> */}
          <Icon icon="loader" size={isMobile ? 400 : 550} color="#1E1E1E" />
        </ImgContainer>
        <LoaderNumberContainer className="">
          <LoaderNumberMask className="loader-number-mask">
            {loaderNumbers.map((number, index) => (
              <LoaderNumber
                key={index}
                className={`loader-number ${loaderDisplay}`}
              >
                {number}%
              </LoaderNumber>
            ))}
          </LoaderNumberMask>
        </LoaderNumberContainer>
      </Container>
    </Wrapper>
  );
};

export default Loader;
