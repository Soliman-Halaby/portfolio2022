import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import { useRecoilValue } from "recoil";
import { loadingState } from "recoil/loaderState";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "text":
      handleEnterTitle(props);
      break;
  }
};

function handleEnterTitle({ text, animText, loader }) {
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

  let displayDelay = animText === true ? 3.1 : 1.2;

  if (loader) {
    displayDelay = 0;
  }
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
