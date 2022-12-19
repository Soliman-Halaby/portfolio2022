import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import CustomEase from "vendor/gsap/CustomEase";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(CustomEase);

const customEase = CustomEase.create(
  "custom",
  "M0,0 C0.182,0.916 0.48,1.404 1,1 "
);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "header":
      handleEnterHeader(props);
      break;
  }
};

function handleEnterHeader({ el, delay, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0.035;
  const displayDelay = animText === true ? 3.3 : 0;

  tl.fromTo(
    el.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.75,
      delay: elDelay + delay + displayDelay,
      ease: customEase,
    },
    "anim"
  );
  tl.fromTo(
    el.current,
    {
      y: "-20%",
    },
    {
      y: 0,
      duration: 0.75,
      delay: elDelay + delay + displayDelay,
      ease: customEase,
    },
    "anim"
  );
}
