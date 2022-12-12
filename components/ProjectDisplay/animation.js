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

    case "number":
      handleEnterNumber(props);
      break;
  }
};

function handleEnterImg({ el, index, delay }) {
  const tl = gsap.timeline();
  const elDelay = 0.05;

  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.6,
      delay: elDelay * index + delay,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      y: "30%",
    },
    {
      y: "0%",
      duration: 0.6,
      delay: elDelay * index + delay,
    },
    "anim"
  );
}

function handleEnterTitle({ text, delay }) {
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
        delay: textDelay * index + delay,
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
        delay: textDelay * index + delay,
      },
      "anim"
    );
  });
}

function handleEnterNumber({ text, delay }) {
  const tl = gsap.timeline();
  const textDelay = 0.09;

  tl.fromTo(
    text.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.6,
      delay: textDelay + delay,
    },
    "anim"
  );
  tl.fromTo(
    text.current,
    {
      y: "100%",
    },
    {
      y: 0,
      duration: 0.6,
      delay: textDelay + delay,
    },
    "anim"
  );
}
