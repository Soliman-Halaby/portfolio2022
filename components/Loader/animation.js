import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import { useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "pin":
      handleEnterPin(props);
      break;
  }
};

function handleEnterPin({ text, animText }) {
  const splitText = new SplitText(text.current, {
    type: "lines,words",
    wordsClass: "word",
    linesClass: "line",
  });

  const tl = gsap.timeline();

  tl.add("anim");
  gsap.set(text.current, { opacity: 1 });

  const textDelay = 0.09;

  const displayDelay = 0;
  splitText.lines.forEach((line, index) => {
    const words = line.children;

    tl.fromTo(
      words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        delay: textDelay * index + displayDelay,
      },
      "anim"
    );
    tl.fromTo(
      words,
      {
        y: "100%",
      },
      {
        y: 0,
        duration: 0.6,
        delay: textDelay * index + displayDelay,
      },
      "anim"
    );
  });
}

export const handleExit = (props) => {
  const { display } = props;

  switch (display) {
    case "text":
      handleExitTitle(props);
      break;
    case "image":
      handleExitImage(props);
      break;
    case "container":
      handleExitContainer(props);
      break;
  }
};

function handleExitTitle({ text, animText, delay }) {
  const tl = gsap.timeline();

  tl.add("anim");
  gsap.set(text.current, { opacity: 1 });

  const textDelay = 0.09;

  const displayDelay = 0;

  tl.fromTo(
    text.current,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.4,
      delay: textDelay + displayDelay + delay,
    },
    "anim"
  );
  tl.fromTo(
    text.current,
    {
      y: 0,
    },
    {
      y: "-100%",
      duration: 0.4,
      delay: textDelay + displayDelay + delay,
    },
    "anim"
  );
}

function handleExitImage({ el, animText, delay }) {
  const tl = gsap.timeline();

  const textDelay = 0.09;

  const displayDelay = 0;
  tl.add("anim");
  gsap.set(el.current, { opacity: 1 });

  tl.fromTo(
    el.current,
    {
      rotation: 0,
    },
    {
      rotation: 480,
      duration: 0.8,
      delay: textDelay + displayDelay + delay,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      scale: 1,
    },
    {
      scale: 0.03,
      duration: 0.8,
      delay: textDelay + displayDelay + delay,
    },
    "anim"
  );
}

function handleExitContainer({ el, animText, delay }) {
  const tl = gsap.timeline();

  const elementDelay = 0.09;
  const displayDelay = 0;
  tl.add("anim");
  gsap.set(el.current, { opacity: 1 });

  tl.fromTo(
    el.current,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.4,
      delay: elementDelay + displayDelay + delay,
    },
    "anim"
  );
}
