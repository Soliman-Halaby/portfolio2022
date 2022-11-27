import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";
import { useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  console.log(display);
  switch (display) {
    case "pin":
      handleEnterPin(props);
      break;
  }
};

function handleEnterPin({ el, delay, animText }) {
  const tl = gsap.timeline();
  const elDelay = 0.09;
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
