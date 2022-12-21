import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import CustomEase from "vendor/gsap/CustomEase";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(CustomEase);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "tag":
      handleEnterTag(props);
      break;
  }
};

function handleEnterTag({ el, delay, index }) {
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
      delay: elDelay * index + delay,
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
      delay: elDelay * index + delay,
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
      delay: elDelay * index + delay,
      ease: customEase,
    },
    "anim"
  );
}
