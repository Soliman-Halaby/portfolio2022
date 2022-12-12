import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import { CustomEase } from "vendor/gsap/CustomEase";
gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    // case "title":
    //   handleEnterTitle(props);
    //   break;
    // default:
    //   handleEnterRegular(props);
    //   break;
    case "tag-title":
      handleEnterTagTitle(props);
      break;
    case "description":
      handleEnterDescription(props);
      break;
    case "ground":
      handleEnterGround(props);
      break;
    case "title":
      handleEnterTitle(props);
      break;
  }
};

function handleEnterGround({ el, delay, image, reverse, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;

  const displayDelay = animText === true ? 3.1 : 0;

  tl.fromTo(
    el.current,
    {
      width: 0,
    },
    {
      width: "100%",
      duration: 0.6,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );
}
function handleEnterTagTitle({ el, delay, reverse }) {
  const customEase = CustomEase.create(
    "custom",
    "M0,0 C0.182,0.916 0.48,1.404 1,1 "
  );
  const tl = gsap.timeline();
  const elDelay = 0.09;

  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.3,
      delay: elDelay + delay,
      ease: customEase,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      y: "20%",
    },
    {
      y: "0%",
      duration: 0.3,
      delay: elDelay + delay,
      ease: customEase,
    },
    "anim"
  );

  tl.fromTo(
    el.current,
    {
      rotate: "10",
    },
    {
      rotation: 0,
      duration: 0.3,
      delay: elDelay + delay,
      ease: customEase,
    },
    "anim"
  );
}
function handleEnterDescription({ el, delay, image, reverse }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;

  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.6,
      delay: elDelay + delay,
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
      delay: elDelay + delay,
    },
    "anim"
  );
}

function handleEnterTitle({ el, animText, delay }) {
  const splitText = new SplitText(el.current, {
    type: "words, lines",
    wordsClass: "word",
    charsClass: "char",
    linesClass: "line",
  });

  const tl = gsap.timeline();

  tl.add("anim");
  gsap.set(el.current, { opacity: 1 });

  const textDelay = 0.09;

  const displayDelay = animText === true ? 3.1 : 0;
  splitText.words.forEach((word, index) => {
    const words = word;

    console.log();
    let indexElem = index === splitText.words.length - 1 ? "10" : "0";
    tl.fromTo(
      words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        delay: textDelay * indexElem + displayDelay + delay,
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
        delay: textDelay * indexElem + displayDelay + delay,
      },
      "anim"
    );
  });
}
