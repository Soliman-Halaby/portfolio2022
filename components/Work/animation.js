import { gsap } from "vendor/gsap";
import SplitText from "vendor/gsap/SplitText";

gsap.registerPlugin(SplitText);

export const handleEnter = (props) => {
  const { display } = props;

  switch (display) {
    case "title":
      handleEnterRegular(props);
      break;
    // default:
    //   handleEnterRegular(props);
    //   break;
  }
};

function handleEnterRegular({ text }) {
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
        delay: textDelay * index,
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
        delay: textDelay * index,
      },
      "anim"
    );
  });
}

// function handleEnterTitle({ text }) {
//   const splitText = new SplitText(text.current, {
//     type: "lines,words",
//     wordsClass: "word",
//     charsClass: "char",
//     linesClass: "line",
//   });

//   const tl = gsap.timeline();

//   tl.add("anim");
//   gsap.set(text.current, { opacity: 1 });

//   const textDelay = 0.09;

//   splitText.lines.forEach((line, index) => {
//     const words = line.children;

//     tl.fromTo(
//       words,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 0.6,
//         delay: textDelay * index,
//       },
//       "anim"
//     );
//     tl.fromTo(
//       words,
//       {
//         y: "100%",
//       },
//       {
//         y: 0,
//         duration: 0.6,
//         delay: textDelay * index,
//       },
//       "anim"
//     );
//   });
// }
