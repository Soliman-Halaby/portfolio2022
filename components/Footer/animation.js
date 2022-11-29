import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "title":
      handleEnterTitle(props);
      break;
    // default:
    //   handleEnterRegular(props);
    //   break;
    case "image":
      handleEnterImg(props);
      break;

    case "tag":
      handleEnterTag(props);
      break;
    case "pin":
      handleEnterPin(props);
  }
};

function handleEnterImg({ el, delay, image, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0;
  const displayDelay = animText === true ? 3.2 : 0;

  console.log("enter");

  console.log("el", el);
  tl.fromTo(
    el.current,
    {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 97%);",
    },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.4,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );

  tl.fromTo(
    image.current,
    {
      scale: 1.3,
    },
    {
      scale: 1,
      duration: 0.45,
      delay: elDelay + delay + 0.25 + displayDelay,
    },
    "anim"
  );
}
function handleEnterTitle({ text, animText }) {
  const splitText = new SplitText(text.current, {
    type: "lines,words",
    wordsClass: "word",
    charsClass: "char",
    linesClass: "line",
  });

  const tl = gsap.timeline();

  tl.add("anim");
  gsap.set(text.current, { opacity: 1 });

  const textDelay = 0.09;
  const displayDelay = animText === true ? 2.9 : 0;

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

function handleEnterTag({ el, delay, image, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;
  const displayDelay = animText === true ? 2.8 : 0;

  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.6,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      y: "100%",
    },
    {
      y: "0%",
      duration: 0.6,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );
}

function handleEnterPin({ el, delay, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;
  const displayDelay = animText === true ? 2.9 : 0;

  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.15,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      rotation: 40,
    },
    {
      rotation: 0,
      duration: 0.15,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );
}
