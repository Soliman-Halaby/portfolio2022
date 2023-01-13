import React, { useState, useRef, useEffect, Fragment } from "react";

import { useRecoilValue } from "recoil";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { loaderState } from "recoil/loaderState";
import { cursorHover } from "recoil/cursorState";
import {
  Engine,
  Render,
  Composite,
  World,
  Body,
  Bodies,
  Mouse,
  Events,
  MouseConstraint,
  Runner,
  Matter,
} from "matter-js";

import {
  Title,
  MatterContainer,
  Box,
  Detail,
  CloseBtnContainer,
  CloseBtn,
  DetailContainer,
  Ground,
  Label,
  DescriptionContainer,
  Description,
  OtherFactsContainer,
  ControlWrapper,
  ControlContainer,
  Control,
  SceneContainer,
} from "./style";

import { handleEnter } from "./animation.js";
import useOnScreen from "hook/index.js";

import datas from "/utils/about.json";

const MatterComponent = ({ pageTitle }) => {
  const requestRef = useRef();
  const boxRef = useRef([]);
  const descriptionRef = useRef(null);
  const detailRef = useRef(null);
  const otherFactRef = useRef(null);
  const tagTitleRef = useRef(null);
  const titleRef = useRef(null);
  const groundRef = useRef(null);
  const engine = useRef(Engine.create({}));

  const setCursorHover = useSetRecoilState(cursorHover);
  const resetCursor = useResetRecoilState(cursorHover);

  const cursorRotation = () => {
    setCursorHover("expand");
  };

  const loaderDisplay = useRecoilValue(loaderState);

  const scene = useRef();

  const [detail, setDetail] = useState("closed");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [title, setTitle] = useState(datas[0].label);
  const [content, setContent] = useState(datas[0].description);

  const [count, setCount] = useState(loaderDisplay === true ? 8 : 3);

  const [displayBox, setDisplayBox] = useState(false);
  const onScreenDetail = useOnScreen(scene);
  let bodies = [];

  // Utilisez useEffect pour mettre à jour le compteur toutes les secondes
  useEffect(() => {
    // Si le compteur est supérieur à 0, décrémentez-le de 1
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
    if (count === 0) {
      setDisplayBox(true);
    }
  }, [count]);

  useEffect(() => {
    if (onScreenDetail) setReveal(onScreenDetail);
  }, [onScreenDetail]);

  useEffect(() => {
    if (reveal) {
      handleEnter({
        el: groundRef,
        display: "ground",
        delay: 0.65,
        animText: loaderDisplay,
      });
      handleEnter({
        el: titleRef,
        display: "title",
        delay: 1.7,
        animText: loaderDisplay,
      });
    }
  }, [reveal]);

  const animationEnterDetail = () => {
    handleEnter({
      el: descriptionRef,
      display: "description",
      delay: 0.65,
    });
    handleEnter({
      el: otherFactRef,
      display: "description",
      delay: 0.85,
    });

    handleEnter({
      el: tagTitleRef,
      display: "tag-title",
      delay: 0.35,
    });
  };
  const GRAVITY = 1;

  const WIREFRAMES = true;

  // Generate walls
  const wall = (x, y, width, height) => {
    return Bodies.rectangle(x, y, width, height, {
      render: {
        lineWidth: 1,
      },
      isStatic: true,
    });
  };

  // Function to generate blocks in scene
  const rect = (x, y, width, height, angle) => {
    return Bodies.rectangle(x, y, width, height, {
      angle: angle,
      render: {},
      mass: 10,
      restitution: 0.3,
      friction: 0.2,
      frictionAir: 0.01,
    });
  };

  // Function to create scene walls
  const createScene = () => {
    // Scene walls
    let clientHeight = window.innerHeight;
    let clientWidth = window.innerWidth;

    const ground = wall(
      clientWidth / 2,
      clientHeight + 50,
      clientWidth * 2,
      250
    );

    const wallTop = wall(
      clientWidth / 2,
      -clientHeight * 1.5,
      clientWidth,
      500
    );
    const wallLeft = wall(-100, clientHeight / 2, 200, clientHeight * 3);
    const wallRight = wall(
      clientWidth + 100,
      clientHeight / 2,
      200,
      clientHeight * 3
    );

    // Add all walls and mouse constraint to the world
    Composite.add(engine.current.world, [ground, wallTop, wallLeft, wallRight]);
  };

  // Function add mouse constraint
  const addMouseControl = () => {
    // Controls box with mouse
    const mouseConstraint = MouseConstraint.create(engine.current, {
      element: scene.current,
    });

    Composite.add(engine.current.world, [mouseConstraint]);
  };

  useEffect(() => {
    let clientWidth = document.body.clientWidth;

    let clientHeight = document.body.clientHeight;

    // const render = Render.create({
    //   element: scene.current,
    //   engine: engine.current,
    //   options: {
    //     width: clientWidth,
    //     height: clientHeight,
    //     wireframes: WIREFRAMES,
    //     background: "transparent",
    //   },
    // });

    // render.options.showPerformance = true;

    // Render.run(render);

    // Create a new box for each data in datas array and add it to the world
    for (let i = 0; i < datas.length; i++) {
      const box = {
        body: rect(
          Math.random() * clientWidth,
          Math.random() * -clientHeight,
          boxRef.current[i].offsetWidth,
          boxRef.current[i].offsetHeight,
          Math.random() * 360
        ),

        elem: boxRef.current[i],

        render() {
          const { x, y } = box.body.position;
          box.elem.style.top = `${y - boxRef.current[i].offsetHeight / 2}px`;
          box.elem.style.left = `${x - boxRef.current[i].offsetWidth / 2}px`;
          box.elem.style.transform = `rotate(${box.body.angle}rad)`;
        },
      };
      bodies.push(box);

      Composite.add(engine.current.world, [bodies[i].body]);
    }

    // Create Scene elements
    createScene();
    addMouseControl();
    // Re render elements to get box position for each frame
    const rerender = () => {
      Engine.update(engine.current);
      for (let i = 0; i < datas.length; i++) {
        bodies[i].render();
      }

      // Play RAF if loader is not displayed
      requestRef.current = requestAnimationFrame(rerender);
    };

    if (displayBox) {
      rerender();
    }

    // Clean up
    return () => {
      Engine.clear(engine.current);
      Composite.clear(engine.current.world);
      cancelAnimationFrame(requestRef.current);
    };
  }, [loaderDisplay, displayBox]);

  // Animation for detail box
  // useEffect(() => {
  //   let clientWidth = document.body.clientWidth;
  //   let clientHeight = document.body.clientHeight;

  //   const detailBox = {
  //     body: wall(
  //       clientWidth - 420,
  //       clientHeight - clientHeight / 3.1,
  //       detailRef.current.offsetWidth,
  //       detailRef.current.offsetHeight
  //     ),

  //     elem: detailRef.current,
  //   };

  //   // Composite.add(engine.current.world, [detailBox.body]);

  //   // Body.setStatic(detailBox.body, true);

  //   // Body.setPosition(detailBox.body, { x: 100, y: 100 });
  //   Engine.update(engine.current);
  //   // detail === "opened"
  //   //   ? Body.scale(detailBox.body, 1, 1)
  //   //   : Body.scale(detailBox.body, 1, 1);
  //   const controlDetail = () => {
  //     // detail === "opened"
  //     //   ? Body.translate(detailBox.body, { x: -30, y: -5 })
  //     //   : Body.translate(detailBox.body, {
  //     //       x: detailRef.current.offsetWidth,
  //     //       y: 0,
  //     //     });

  //     if (detail === "opened") {
  //       // Body.translate(detailBox.body, { x: -30, y: -11 });
  //     }

  //     // Body.translate(detailBox.body, {
  //     //   x: 0,
  //     //   y: detailRef.current.offsetHeight,
  //     // });
  //     if (detail === "closed") {
  //       // Body.translate(detailBox.body, {
  //       //   x: 0,
  //       //   y: detailRef.current.offsetHeight,
  //       // });
  //       // Body.update(detailBox.body);
  //       // World.remove(engine.current.world, detailBox.body);
  //     }

  //     // Engine.update(engine.current);
  //   };

  //   controlDetail();
  // }, [detail]);

  const closeDetail = () => {
    setDetail("closed");
  };

  // Function to display detail box, title and content
  function openDetail(index) {
    if (detail === "closed") {
      // Trigger animation if detail box is closed
      animationEnterDetail();
    }
    setDetail("opened");
    setCurrentIndex(index);
    setTitle(boxRef.current[index].textContent);

    const getContent = datas.find(
      (data) => data.label === boxRef.current[index].textContent
    );

    setContent(getContent.description);
  }

  // Previous box detail
  const previousDetail = () => {
    if (currentIndex === 0) {
      setCurrentIndex(datas.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    setContent(datas[currentIndex].description);
    setTitle(datas[currentIndex].label);
  };

  // Next box detail
  const nextDetail = () => {
    if (currentIndex === datas.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setContent(datas[currentIndex].description);
    setTitle(datas[currentIndex].label);
  };

  useEffect(() => {
    // Detect if click outside detail box
    function handleClickOutside(event) {
      if (
        detailRef.current &&
        !detailRef.current.contains(event.target) &&
        !event.target.classList.contains("box")
      ) {
        if (detail === "opened") {
          setDetail("closed");
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [detailRef, detail]);

  return (
    <MatterContainer ref={scene}>
      <SceneContainer />
      {/* <Fragment> */}
      {datas.map((data, i) => {
        return (
          <Box
            className={`box ${i % 2 !== 0 ? "rounded" : ""}`}
            key={i}
            ref={(el) => (boxRef.current[i] = el)}
            onClick={() => openDetail(i)}
            onMouseEnter={() => cursorRotation()}
            onMouseLeave={() => resetCursor()}
          >
            {data.label}
          </Box>
        );
      })}
      {/* {detail === "opened" && ( */}
      <Detail className={detail} ref={detailRef}>
        <DetailContainer>
          <CloseBtnContainer>
            <CloseBtn
              onClick={() => closeDetail()}
              src="/close.svg"
              layout="fill"
            ></CloseBtn>
          </CloseBtnContainer>
          <Label ref={tagTitleRef}>{title}</Label>
          <DescriptionContainer>
            <Description
              ref={descriptionRef}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </DescriptionContainer>
          <OtherFactsContainer ref={otherFactRef}>
            Other facts
            <ControlWrapper>
              <ControlContainer onClick={() => previousDetail()}>
                <Control
                  src="/facts-prev.svg"
                  width="24px"
                  height="24px"
                ></Control>
              </ControlContainer>
              <ControlContainer onClick={() => nextDetail()}>
                <Control
                  src="/facts-next.svg"
                  width="24px"
                  height="24px"
                ></Control>
              </ControlContainer>
            </ControlWrapper>
          </OtherFactsContainer>
        </DetailContainer>
      </Detail>
      {/* )} */}
      <Ground ref={groundRef} />
      {/* </Fragment> */}
      <Title
        ref={titleRef}
        dangerouslySetInnerHTML={{ __html: pageTitle }}
      ></Title>
    </MatterContainer>
  );
};

export default MatterComponent;
