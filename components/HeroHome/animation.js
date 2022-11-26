import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import { useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "left":
      handleEnterLeft(props);
      break;
    default:
      handleEnterRegular(props);
      break;
  }
};

function handleEnterLeft({ text, animText }) {
  const splitText = new SplitText(text.current, {
    type: "lines,words",
    wordsClass: "word",
    charsClass: "char",
    linesClass: "line",
  });

  const lines = text.current.querySelectorAll(".line");

  for (const line of lines) {
    const tags = line.querySelectorAll("*");

    for (const tag of tags) {
      tag.classList.add("word");
    }
  }

  const tl = gsap.timeline();

  tl.add("anim");
  gsap.set(text.current, { opacity: 1 });

  const textDelay = animText ? 10 : 0.09;

  splitText.lines.forEach((line, index) => {
    const words = line.children;

    tl.fromTo(
      words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.7,
        delay: textDelay * index,
      },
      "anim"
    );
    tl.fromTo(
      words,
      {
        y: "100%",
        // x: "100px",
      },
      {
        y: 0,
        // x: 0,
        duration: 2 / 3,
        delay: textDelay * index,
      },
      "anim"
    );
  });
}

function handleEnterRegular({ text, animText }) {
  const splitText = new SplitText(text.current, {
    type: "lines,words",
    wordsClass: "word",
    charsClass: "char",
    linesClass: "line",
  });

  console.log("anim", animText);

  const tl = gsap.timeline();

  tl.add("anim");
  gsap.set(text.current, { opacity: 1 });

  const textDelay = animText ? 2.48 : 0.09;

  splitText.lines.forEach((line, index) => {
    const words = line.children;
    console.log("index", index);

    tl.fromTo(
      words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        delay: animText ? textDelay : textDelay * index,
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
        delay: animText ? textDelay * 1.25 : textDelay * index,
      },
      "anim"
    );
  });
}
