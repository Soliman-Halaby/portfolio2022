import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import { CustomEase } from "vendor/gsap/CustomEase";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(CustomEase);

export const handleEnter = (props) => {
  const { display } = props;

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

const customEaseSlow = CustomEase.create(
  "custom",
  "M0,0 C0.04,0.646 0.15,1 1,1 "
);

const customEaseQuick = CustomEase.create(
  "custom",
  "M0,0 C0.182,0.916 0.48,1.404 1,1 "
);

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

  const textDelay = 0.09;

  const displayDelay = animText === true ? 4.6 : 0;
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
        delay: textDelay + displayDelay + delay,
        ease: customEaseSlow,
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
        duration: 0.7,
        delay: textDelay + displayDelay + delay,
        ease: customEaseSlow,
      },
      "anim"
    );
  });
}

function handleEnterPin({ el, delay, animText }) {
  const tl = gsap.timeline();
  const elDelay = animText === true ? 4.6 : 0;
  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.15,
      delay: elDelay + delay,
      ease: customEaseQuick,
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
      delay: elDelay + delay,
      ease: customEaseQuick,
    },
    "anim"
  );
}

function handleEnterImg({ el, delay, image, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0;
  const displayDelay = animText === true ? 4.6 : 0;

  tl.fromTo(
    el.current,
    {
      y: "10%",
    },
    {
      y: 0,
      duration: 0.3,
      delay: elDelay + delay + displayDelay,
      ease: customEaseSlow,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.3,
      delay: elDelay + delay + displayDelay,
      ease: customEaseSlow,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      clipPath: "polygon(35% 0px, 65% 0px, 65% 100%, 35% 100%)",
    },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.5,
      delay: elDelay + delay + displayDelay + 0.3,
      ease: customEaseSlow,
    },
    "anim"
  );

  tl.fromTo(
    image.current,
    {
      scale: 1,
    },
    {
      scale: 1.2,
      duration: 0.6,
      delay: elDelay + delay + 0.5 + displayDelay + 0.3,
      ease: customEaseSlow,
    },
    "anim"
  );
}
