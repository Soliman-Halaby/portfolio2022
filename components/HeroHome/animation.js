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

    case "image":
      handleEnterImg(props);
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

  const textDelay = 0.09;

  const displayDelay = animText === true ? 3.1 : 0;
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

function handleEnterPin({ el, delay, animText }) {
  const tl = gsap.timeline();
  const elDelay = animText === true ? 3.1 : 0.09;
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

function handleEnterImg({ el, delay, image, animText }) {
  console.log("enter img");
  const tl = gsap.timeline();
  const elDelay = 0;
  const displayDelay = animText === true ? 3.2 : 0;

  tl.fromTo(
    el.current,
    {
      clipPath: "polygon(35% 0px, 65% 0px, 65% 100%, 35% 100%)",
    },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.2,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );

  tl.fromTo(
    image.current,
    {
      scale: 1.15,
    },
    {
      scale: 1,
      duration: 0.12,
      delay: elDelay + delay + 0.25 + displayDelay,
    },
    "anim"
  );
}
