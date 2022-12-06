import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";

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
    case "title":
      handleEnterTitle(props);
      break;
    case "description":
      handleEnterDescription(props);
      break;
    case "ground":
      handleEnterGround(props);
      break;
  }
};

function handleEnterGround({ el, delay, image, reverse }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;

  console.log("ground", el);
  tl.fromTo(
    el.current,
    {
      width: 0,
    },
    {
      width: "100%",
      duration: 0.6,
      delay: elDelay + delay,
    },
    "anim"
  );
}
function handleEnterTitle({ el, delay, reverse }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;

  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.4,
      delay: elDelay + delay,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      rotation: 4.6,
    },
    {
      rotation: 0,
      duration: 0.4,
      delay: elDelay + delay,
    },
    "anim"
  );
}
function handleEnterDescription({ el, delay, image, reverse }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;

  console.log("reverse", reverse);

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
