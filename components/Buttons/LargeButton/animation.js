import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "tag":
      handleEnterTag(props);
      break;
  }
};

function handleEnterTag({ el, delay, index }) {
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
      delay: elDelay * index + delay,
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
      delay: elDelay * index + delay,
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
      delay: elDelay * index + delay,
    },
    "anim"
  );
}
