import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "footer":
      handleEnterFooter(props);
      break;
  }
};

function handleEnterFooter({ el, delay, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0.035;
  const displayDelay = animText === true ? 2.8 : 0;

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
      y: "20%",
    },
    {
      y: "0%",
      duration: 0.6,
      delay: elDelay + delay + displayDelay,
    },
    "anim"
  );
}
