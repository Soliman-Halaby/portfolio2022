import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import { CustomEase } from "vendor/gsap/all";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(CustomEase);

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

const customEase = CustomEase.create("custom", "M0,0 C0.04,0.646 0.15,1 1,1 ");

function handleEnterImg({ el, delay, image, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0;
  const displayDelay = animText === true ? 4.6 : 0;

  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.2,
      delay: elDelay + delay + displayDelay,
      ease: customEase,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 97%);",
    },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.75,
      delay: elDelay + delay + displayDelay,
      ease: customEase,
    },
    "anim"
  );

  tl.fromTo(
    image.current,
    {
      scale: 1,
    },
    {
      scale: 1.4,
      duration: 0.75,
      delay: elDelay + delay + displayDelay + 0.5,
      ease: customEase,
    },
    "anim"
  );
}
function handleEnterTitle({ text, animText, delay }) {
  const splitText = new SplitText(text.current, {
    type: "lines,words",
    wordsClass: "word",
    charsClass: "char",
    linesClass: "line",
  });

  const tl = gsap.timeline();

  tl.add("anim");
  gsap.set(text.current, { opacity: 1 });

  const textDelay = 0.0;
  const displayDelay = animText === true ? 5 : 0;

  splitText.lines.forEach((line, index) => {
    const words = line.children;

    tl.fromTo(
      words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.75,
        delay: textDelay + displayDelay + delay,
        ease: customEase,
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
        duration: 0.75,
        delay: textDelay + displayDelay + delay,
        ease: customEase,
      },
      "anim"
    );
  });
}

function handleEnterTag({ el, delay, image, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0.035;
  const displayDelay = animText === true ? 5 : 0;

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
  const displayDelay = animText === true ? 5 : 0;

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
      rotation: -4.6,
      duration: 0.15,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );
}
