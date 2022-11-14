import React, { useState, useRef, useEffect, Fragment } from "react";

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
  Description,
  OtherFactsContainer,
  ControlWrapper,
  ControlContainer,
  Control,
  SceneContainer,
} from "./style";

const MatterComponent = ({}) => {
  const requestRef = useRef();
  const boxRef = useRef([]);

  const [detail, setDetail] = useState("closed");
  const detailRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   // Variables

  const GRAVITY = 1;

  const WIREFRAMES = true;
  // Scene walls
  const wall = (x, y, width, height) => {
    return Bodies.rectangle(x, y, width, height, {
      render: {
        lineWidth: 1,
      },
      isStatic: true,
    });
  };

  const datas = [
    {
      label: "Paris",
      description:
        "I arrived in Paris in 2019 for my higher education and I don't regret this choice! I like this city very much because it is possible to find a balance on several points, between sports, activities and work atmosphere.",
    },
    {
      label: "Ultranoir",
      description:
        "In May 2022, a new adventure began at Ultranoir during a 6 month internship. I had the opportunity to work on various projects and to deepen my knowledge of React.</br>This internship was very formative and is one of the reasons why I decided to do my portfolio in Next. The whole dev team was there to coach me and train me on the different topics. It was my first 'real' experience in an agency, since my previous internship was in full remote.",
    },
    {
      label: "Football (PSG)",
      description:
        "I'm a big soccer fan, I played pro football for a large part of my youth and now I only play soccer with friends (which is not bad)! I support PSG (this year will be the good one...)",
    },
    {
      label: "Sailing",
      description:
        "Since I was 8 years old, until I was 18, I practiced sailing in Saint Raphael, in the South of France. I had the opportunity to sail on several boats (pico, catamaran, ludic). My goal was to be an instructor during the summer period but it was not done because of lack of time. I managed to reach the level 4 (there are 5 levels) certified by the FFV.",
    },
    {
      label: "Dreamline Studio",
      description:
        "From June to September 2021, I did an internship at Dreamline Studio. It was my first professional experience because I had not done an internship before. I had the opportunity to deepen my knowledge on WordPress and to master this tool as it should be. The internship was full remote.",
    },
    {
      label: "Cairo",
      description:
        "Until I was 18, I was born and raised in Cairo. I did all my schooling at the French Lycée in Cairo. I often return to Egypt during the year when possible to meet up with my family and friends.</br></br>Growing up in Egypt and traveling whenever I could, allowed me to become fluent in Arabic and to adapt to any kind of environment.",
    },
    {
      label: "Karate",
      description:
        "From the age of 5 to 17 I practiced karate in Egypt with the same Sensai. With time and training, this allowed me to obtain my first dan black belt. Karate was a big part of my daily life when I was in Egypt as I trained 2 to 3 times a week in addition to other sports. ",
    },
    {
      label: "HETIC",
      description:
        "I am a 4th year student at Hetic where we learn web development, web design and communication. </br></br>Despite the fact that I have deepened the web development, in order to understand and be able to touch everything, I have not neglected the design as well as the communication, because in my point of vue it’s important to understand all the aspect of a project and to be able to discuss it with my teammates.</br></br>Moreover, I'm used to working in a team since Hetic trains us to do so by setting up many projects in groups.",
    },
    {
      label: "New York",
      description:
        "New York is one of the cities I want to discover the most. I also want to go there to improve my English and discover a new continent.</br>So why not do it if I can do it while working in the field I love.</br>It would be a great opportunity for me to go there, especially since I have never been to America.",
    },
    {
      label: "Piano",
      description:
        "I always wanted to learn the piano and the guitar since I was a child. I made a choice and turned to the piano which I practiced for several years at the Russian cultural center in Egypt. For those who are looking for it, you can find a video on youtube of little Soliman playing the piano! ",
    },
    {
      label: "Aikido",
      description:
        "In addition to karate, I wanted to learn a new philosophy. With the same Sensai, I had the chance to learn Aikido, the art of using the power of the other to defend oneself. It was a very important complement for me and very interesting in the way of thinking and in the application. Although I don't practice it anymore, all my learning is not forgotten and is still present. ",
    },
    {
      label: "Three.js Journey",
      description: "Threejs",
    },
    // { label: "Hetic3", description: "test3" },
  ];

  const [title, setTitle] = useState(datas[0].label);
  const [content, setContent] = useState(datas[0].description);

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

  //     // Data structure to store all rectangles

  const engine = useRef(Engine.create({}));

  const scene = useRef();

  const bodies = [];

  const closeDetail = () => {
    console.log("close");
    setDetail("closed");
  };

  function openDetail(index) {
    console.log("opened");
    setDetail("opened");
    console.log(index);
    setCurrentIndex(index);

    // console.log(boxRe/f.current[index].textContent);
    setTitle(boxRef.current[index].textContent);
    // console.log(event.currentTarget);
    console.log(currentIndex);
    console.log("elementIndex", index);

    const getContent = datas.find(
      (data) => data.label === boxRef.current[index].textContent
    );

    console.log(getContent.description);
    setContent(getContent.description);
    // data.label === boxRef.current[index].textContent;

    // console.log(found);
  }

  useEffect(() => {
    let clientWidth = document.body.clientWidth;

    console.log(clientWidth);
    let clientHeight = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: clientWidth,
        height: clientHeight,
        wireframes: WIREFRAMES,
        background: "transparent",
      },
    });

    render.options.showPerformance = true;

    Render.run(render);

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
      // console.log(box.body.position);
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
      element: document.body,
    });

    // Add elements in the world
    Composite.add(engine.current.world, [
      ground,
      wallTop,
      wallLeft,
      wallRight,
      mouseConstraint,
    ]);

    // Re render elements to get box position
    const rerender = () => {
      Engine.update(engine.current);
      for (let i = 0; i < datas.length; i++) {
        bodies[i].render();
        // console.log(bodies[1].body.position);
      }

      requestRef.current = requestAnimationFrame(rerender);
    };

    rerender();

    return () => {
      Engine.clear(engine.current);
      Composite.clear(engine.current.world);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

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
        console.log("yo");
      }

      console.log(detail);
      Engine.update(engine.current);
    };

    controlDetail();

    console.log(detail);
  }, [detail]);

  const previousDetail = () => {
    console.log("prevous");
    console.log(currentIndex);
    // console.log(index);
    setCurrentIndex(currentIndex - 1);

    setContent(datas[currentIndex].description);
    setTitle(datas[currentIndex].label);

    if (currentIndex == 0) {
      setCurrentIndex(datas.length - 1);
      setContent(datas[currentIndex].description);
      setTitle(datas[currentIndex].label);
    }
  };

  const nextDetail = () => {
    // console.log("nex");
    if (currentIndex === datas.length) {
      console.log("updateindex", currentIndex);
      setContent(datas[currentIndex - 1].description);
      setTitle(datas[currentIndex - 1].label);
      setCurrentIndex(0);
    }

    if (currentIndex !== datas.length) {
      setCurrentIndex(currentIndex + 1);

      console.log("currentIndex", currentIndex);
      setContent(datas[currentIndex].description);
      setTitle(datas[currentIndex].label);

      console.log("datalength", datas.length);
      // console.log(datas.length);
    }
  };
  return (
    <MatterContainer>
      <SceneContainer ref={scene} />
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
        <Detail className={detail} ref={detailRef}>
          <DetailContainer>
            <CloseBtnContainer>
              <CloseBtn
                onClick={() => closeDetail()}
                src="/close.svg"
                layout="fill"
              ></CloseBtn>
            </CloseBtnContainer>
            <Label>{title}</Label>
            <Description dangerouslySetInnerHTML={{ __html: content }} />
            <OtherFactsContainer>
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
