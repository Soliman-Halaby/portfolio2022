import React, { useState, useRef, useEffect, Fragment } from "react";

import { useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";
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

const MatterComponent = ({}) => {
  const requestRef = useRef();
  const boxRef = useRef([]);
  const descriptionRef = useRef(null);
  const detailRef = useRef(null);
  const otherFactRef = useRef(null);
  const titleRef = useRef(null);
  const engine = useRef(Engine.create({}));

  const loaderDisplay = useRecoilValue(loaderState);
  console.log("datas", datas);

  const scene = useRef();

  const [detail, setDetail] = useState("closed");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [title, setTitle] = useState(datas[0].label);
  const [content, setContent] = useState(datas[0].description);

  const onScreenDetail = useOnScreen(detailRef, 0.35);

  let bodies = [];

  useEffect(() => {
    if (onScreenDetail) setReveal(onScreenDetail);
    console.log("onScreenDetail", onScreenDetail);
  }, [onScreenDetail]);

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
      el: titleRef,
      display: "title",
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

  const closeDetail = () => {
    console.log("close");
    setDetail("closed");
  };

  // Function to display detail box, title and content
  function openDetail(index) {
    console.log("opened");
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

  useEffect(() => {
    let clientWidth = document.body.clientWidth;

    console.log(clientWidth);
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
    // Scene walls

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

    // Controls box with mouse
    const mouseConstraint = MouseConstraint.create(engine.current, {
      element: scene.current,
    });

    // Add all walls and mouse constraint to the world
    Composite.add(engine.current.world, [
      ground,
      wallTop,
      wallLeft,
      wallRight,
      mouseConstraint,
    ]);

    // Re render elements to get box position for each frame
    const rerender = () => {
      Engine.update(engine.current);
      for (let i = 0; i < datas.length; i++) {
        bodies[i].render();
      }

      // Play RAF if loader is not displayed
      if (loaderDisplay !== true) {
        requestRef.current = requestAnimationFrame(rerender);
      }
    };

    rerender();

    // Clean up
    return () => {
      Engine.clear(engine.current);
      Composite.clear(engine.current.world);
      cancelAnimationFrame(requestRef.current);
    };
  }, [loaderDisplay]);

  // Animation for detail box
  useEffect(() => {
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;

    const detailBox = {
      body: wall(
        clientWidth - 420,
        clientHeight - clientHeight / 3.1,
        detailRef.current.offsetWidth,
        detailRef.current.offsetHeight
      ),

      elem: detailRef.current,
    };

    // Composite.add(engine.current.world, [detailBox.body]);

    // Body.setStatic(detailBox.body, true);

    // Body.setPosition(detailBox.body, { x: 100, y: 100 });
    Engine.update(engine.current);
    // detail === "opened"
    //   ? Body.scale(detailBox.body, 1, 1)
    //   : Body.scale(detailBox.body, 1, 1);
    const controlDetail = () => {
      // detail === "opened"
      //   ? Body.translate(detailBox.body, { x: -30, y: -5 })
      //   : Body.translate(detailBox.body, {
      //       x: detailRef.current.offsetWidth,
      //       y: 0,
      //     });

      if (detail === "opened") {
        // Body.translate(detailBox.body, { x: -30, y: -11 });
      }

      // Body.translate(detailBox.body, {
      //   x: 0,
      //   y: detailRef.current.offsetHeight,
      // });
      if (detail === "closed") {
        // Body.translate(detailBox.body, {
        //   x: 0,
        //   y: detailRef.current.offsetHeight,
        // });
        // Body.update(detailBox.body);
        // World.remove(engine.current.world, detailBox.body);
        // console.log("yo");
      }

      console.log(detail);
      // Engine.update(engine.current);
    };

    controlDetail();

    console.log(detail);
  }, [detail]);

  // Previous box detail
  const previousDetail = () => {
    setCurrentIndex(currentIndex - 1);

    setContent(datas[currentIndex].description);
    setTitle(datas[currentIndex].label);

    if (currentIndex == 0) {
      setCurrentIndex(datas.length - 1);
      setContent(datas[currentIndex].description);
      setTitle(datas[currentIndex].label);
    }
  };

  // Next box detail
  const nextDetail = () => {
    if (currentIndex === datas.length) {
      setContent(datas[currentIndex - 1].description);
      setTitle(datas[currentIndex - 1].label);
      setCurrentIndex(0);
    }

    if (currentIndex !== datas.length) {
      setCurrentIndex(currentIndex + 1);

      setContent(datas[currentIndex].description);
      setTitle(datas[currentIndex].label);
    }
  };

  useEffect(() => {
    // Detect if click outside detail box
    function handleClickOutside(event) {
      if (detailRef.current && !detailRef.current.contains(event.target)) {
        if (detail === "opened") {
          console.log("yo");
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
      <Fragment>
        {datas.map((data, i) => {
          return (
            <Box
              className={i % 2 !== 0 ? "rounded" : ""}
              key={i}
              ref={(el) => (boxRef.current[i] = el)}
              onClick={() => openDetail(i)}
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
            <Label ref={titleRef}>{title}</Label>
            <DescriptionContainer>
              <Description
                ref={descriptionRef}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </DescriptionContainer>
            <OtherFactsContainer ref={otherFactRef}>
              Other facts
              <ControlWrapper>
                <ControlContainer>
                  <Control
                    onClick={() => previousDetail()}
                    src="/facts-prev.svg"
                    width="24px"
                    height="24px"
                  ></Control>
                </ControlContainer>
                <ControlContainer>
                  <Control
                    onClick={() => nextDetail()}
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
        <Ground />
      </Fragment>
      <Title>
        Get to know
        <br />
        me better
      </Title>
    </MatterContainer>
  );
};

export default MatterComponent;
