import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import { useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  console.log(display);
  switch (display) {
    case "text":
      handleEnterTitle(props);
      break;
    case "tag":
      handleEnterPin(props);
      break;
  }
};

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
        duration: 0.6,
        delay: textDelay * index,
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
        delay: textDelay * index,
      },
      "anim"
    );
  });
}

function handleEnterPin({ el, delay, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;
  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.15,
      delay: elDelay + delay,
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
      delay: elDelay + delay,
    },
    "anim"
  );
}
